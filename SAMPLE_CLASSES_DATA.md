# Sample Classes for Calendar

## 7 Classes to Add to Supabase

### 1. Morning Hatha Yoga
- **Title:** Morning Hatha Yoga
- **Description:** Start your day with traditional Hatha yoga poses and breathing exercises
- **Instructor:** Priya Sharma
- **Duration:** 60 minutes
- **Level:** Beginner
- **Available Spots:** 15
- **Start Time:** Today at 7:00 AM

### 2. Vinyasa Flow
- **Title:** Vinyasa Flow
- **Description:** Dynamic flowing sequences synchronized with breath
- **Instructor:** Arjun Patel
- **Duration:** 75 minutes
- **Level:** Intermediate
- **Available Spots:** 12
- **Start Time:** Today at 9:00 AM

### 3. Pranayama & Meditation
- **Title:** Pranayama & Meditation
- **Description:** Deep breathing techniques and guided meditation for inner peace
- **Instructor:** Aadhya
- **Duration:** 45 minutes
- **Level:** Beginner
- **Available Spots:** 20
- **Start Time:** Today at 11:00 AM

### 4. Power Yoga
- **Title:** Power Yoga
- **Description:** Intense strength-building yoga workout
- **Instructor:** Vikram Singh
- **Duration:** 60 minutes
- **Level:** Advanced
- **Available Spots:** 10
- **Start Time:** Today at 5:00 PM

### 5. Restorative Yoga
- **Title:** Restorative Yoga
- **Description:** Gentle, relaxing poses with props for deep relaxation
- **Instructor:** Meera Reddy
- **Duration:** 90 minutes
- **Level:** Beginner
- **Available Spots:** 15
- **Start Time:** Today at 6:30 PM

### 6. Ashtanga Yoga
- **Title:** Ashtanga Yoga
- **Description:** Traditional Ashtanga primary series practice
- **Instructor:** Raj Kumar
- **Duration:** 90 minutes
- **Level:** Advanced
- **Available Spots:** 8
- **Start Time:** Tomorrow at 6:00 AM

### 7. Yin Yoga
- **Title:** Yin Yoga
- **Description:** Slow-paced style with longer-held poses for flexibility
- **Instructor:** Kavita Desai
- **Duration:** 75 minutes
- **Level:** Intermediate
- **Available Spots:** 12
- **Start Time:** Tomorrow at 7:30 PM

---

## SQL to Insert Sample Data

```sql
-- Insert sample classes
INSERT INTO classes (title, description, instructor, duration, level) VALUES
('Morning Hatha Yoga', 'Start your day with traditional Hatha yoga poses and breathing exercises', 'Priya Sharma', 60, 'beginner'),
('Vinyasa Flow', 'Dynamic flowing sequences synchronized with breath', 'Arjun Patel', 75, 'intermediate'),
('Pranayama & Meditation', 'Deep breathing techniques and guided meditation for inner peace', 'Aadhya', 45, 'beginner'),
('Power Yoga', 'Intense strength-building yoga workout', 'Vikram Singh', 60, 'advanced'),
('Restorative Yoga', 'Gentle, relaxing poses with props for deep relaxation', 'Meera Reddy', 90, 'beginner'),
('Ashtanga Yoga', 'Traditional Ashtanga primary series practice', 'Raj Kumar', 90, 'advanced'),
('Yin Yoga', 'Slow-paced style with longer-held poses for flexibility', 'Kavita Desai', 75, 'intermediate');

-- Insert sample schedule (adjust dates as needed)
INSERT INTO schedule (class_id, start_time, available_spots) VALUES
(1, NOW() + INTERVAL '7 hours', 15),
(2, NOW() + INTERVAL '9 hours', 12),
(3, NOW() + INTERVAL '11 hours', 20),
(4, NOW() + INTERVAL '17 hours', 10),
(5, NOW() + INTERVAL '18.5 hours', 15),
(6, NOW() + INTERVAL '1 day 6 hours', 8),
(7, NOW() + INTERVAL '1 day 19.5 hours', 12);
```

---

## How to Add These Classes

1. Go to your Supabase Dashboard
2. Click on "SQL Editor"
3. Copy and paste the SQL above
4. Click "Run"
5. Classes will appear in your calendar!
