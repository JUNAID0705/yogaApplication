-- ============================================
-- Yoga Studio App - Supabase Database Setup
-- ============================================
-- Run this SQL in your Supabase SQL Editor
-- ============================================

-- Create classes table
CREATE TABLE classes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  instructor VARCHAR(255) NOT NULL,
  level VARCHAR(50) NOT NULL,
  duration INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create schedule table
CREATE TABLE schedule (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  available_spots INTEGER NOT NULL DEFAULT 10,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create bookings table
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  schedule_id UUID REFERENCES schedule(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(user_id, schedule_id)
);

-- Enable Row Level Security
ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE schedule ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policies for classes (public read)
CREATE POLICY "Allow public read access to classes"
  ON classes FOR SELECT
  TO public
  USING (true);

-- Create policies for schedule (public read)
CREATE POLICY "Allow public read access to schedule"
  ON schedule FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to update schedule (for booking system)
CREATE POLICY "Allow authenticated users to update schedule"
  ON schedule FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policies for bookings (users can read their own)
CREATE POLICY "Users can view their own bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own bookings"
  ON bookings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own bookings"
  ON bookings FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Insert sample yoga classes
INSERT INTO classes (title, description, instructor, level, duration) VALUES
('Hatha Yoga', 'A gentle introduction to the most basic yoga postures. Perfect for beginners looking to build a strong foundation.', 'Sarah Johnson', 'Beginner', 60),
('Vinyasa Flow', 'Dynamic flowing sequences that link breath with movement. Build strength and flexibility through creative transitions.', 'Michael Chen', 'Intermediate', 75),
('Power Yoga', 'An intense, fitness-based approach to vinyasa-style yoga. Expect a challenging workout that builds strength and stamina.', 'Emma Davis', 'Advanced', 90),
('Yin Yoga', 'A slow-paced style with postures held for longer periods. Perfect for deep stretching and meditation.', 'Lisa Anderson', 'Beginner', 60),
('Ashtanga Yoga', 'A rigorous style following a specific sequence of postures. Traditional practice for dedicated students.', 'David Kumar', 'Advanced', 90),
('Restorative Yoga', 'Relaxing practice using props to support the body. Ideal for stress relief and deep relaxation.', 'Sarah Johnson', 'Beginner', 60);

-- Insert sample schedule for the next 7 days
-- This creates one session per class per day for the next week
INSERT INTO schedule (class_id, start_time, available_spots)
SELECT 
  c.id,
  CURRENT_TIMESTAMP + (INTERVAL '1 day' * s.day_offset) + (INTERVAL '1 hour' * (8 + (row_number() OVER (PARTITION BY s.day_offset ORDER BY c.id) - 1) * 2)),
  15
FROM classes c
CROSS JOIN (
  SELECT generate_series(1, 7) as day_offset
) s;

-- Optional: Create a function to increment available spots (for cancellations)
CREATE OR REPLACE FUNCTION increment_spots(schedule_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE schedule
  SET available_spots = available_spots + 1
  WHERE id = schedule_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION increment_spots(UUID) TO authenticated;

-- ============================================
-- Setup Complete!
-- ============================================
-- You can now run the application with: npm run dev
-- ============================================
