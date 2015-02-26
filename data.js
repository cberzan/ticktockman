var sampleData = [
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-03T00:00:00", 
        "end": "2014-11-03T08:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-03T08:00:00", 
        "end": "2014-11-03T08:15:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-03T08:15:00", 
        "end": "2014-11-03T08:30:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-11-03T08:30:00", 
        "end": "2014-11-03T08:50:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-03T08:50:00", 
        "end": "2014-11-03T09:07:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-03T09:07:00", 
        "end": "2014-11-03T09:30:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-03T09:30:00", 
        "end": "2014-11-03T10:28:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-03T10:28:00", 
        "end": "2014-11-03T12:40:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-11-03T12:40:00", 
        "end": "2014-11-03T13:07:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-03T13:07:00", 
        "end": "2014-11-03T13:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-03T13:20:00", 
        "end": "2014-11-03T13:38:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-03T13:38:00", 
        "end": "2014-11-03T14:04:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-03T14:04:00", 
        "end": "2014-11-03T19:00:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_out_by_myself"
        ], 
        "begin": "2014-11-03T19:00:00", 
        "end": "2014-11-03T20:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-03T20:00:00", 
        "end": "2014-11-03T20:08:00"
    }, 
    {
        "category": [
            "leisure", 
            "shopping"
        ], 
        "begin": "2014-11-03T20:08:00", 
        "end": "2014-11-03T20:44:00"
    }, 
    {
        "category": [
            "leisure", 
            "shopping"
        ], 
        "begin": "2014-11-03T20:44:00", 
        "end": "2014-11-03T21:16:00"
    }, 
    {
        "category": [
            "food", 
            "snack"
        ], 
        "begin": "2014-11-03T21:16:00", 
        "end": "2014-11-03T21:32:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-03T21:32:00", 
        "end": "2014-11-03T22:10:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-03T22:10:00", 
        "end": "2014-11-03T22:50:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-03T22:50:00", 
        "end": "2014-11-03T23:04:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-03T23:04:00", 
        "end": "2014-11-03T23:40:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-03T23:40:00", 
        "end": "2014-11-04T08:00:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-04T08:00:00", 
        "end": "2014-11-04T08:20:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-11-04T08:20:00", 
        "end": "2014-11-04T08:42:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-04T08:42:00", 
        "end": "2014-11-04T08:55:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-04T08:55:00", 
        "end": "2014-11-04T09:19:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-11-04T09:19:00", 
        "end": "2014-11-04T10:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-04T10:45:00", 
        "end": "2014-11-04T10:55:00"
    }, 
    {
        "category": [
            "work", 
            "class"
        ], 
        "begin": "2014-11-04T10:55:00", 
        "end": "2014-11-04T12:30:00"
    }, 
    {
        "category": [
            "social", 
            "lunch_social"
        ], 
        "begin": "2014-11-04T12:30:00", 
        "end": "2014-11-04T13:25:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-04T13:25:00", 
        "end": "2014-11-04T13:48:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-04T13:48:00", 
        "end": "2014-11-04T16:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "bureaucracy"
        ], 
        "begin": "2014-11-04T16:00:00", 
        "end": "2014-11-04T16:51:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-04T16:51:00", 
        "end": "2014-11-04T19:03:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-04T19:03:00", 
        "end": "2014-11-04T19:19:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-04T19:19:00", 
        "end": "2014-11-04T19:32:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-11-04T19:32:00", 
        "end": "2014-11-04T20:07:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-04T20:07:00", 
        "end": "2014-11-04T23:40:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-04T23:40:00", 
        "end": "2014-11-04T23:55:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-04T23:55:00", 
        "end": "2014-11-05T00:10:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-05T00:10:00", 
        "end": "2014-11-05T07:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-05T07:20:00", 
        "end": "2014-11-05T08:00:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-05T08:00:00", 
        "end": "2014-11-05T08:30:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-05T08:30:00", 
        "end": "2014-11-05T08:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-05T08:45:00", 
        "end": "2014-11-05T09:00:00"
    }, 
    {
        "category": [
            "work", 
            "advisor_meeting"
        ], 
        "begin": "2014-11-05T09:00:00", 
        "end": "2014-11-05T09:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-05T09:55:00", 
        "end": "2014-11-05T10:12:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-05T10:12:00", 
        "end": "2014-11-05T13:12:00"
    }, 
    {
        "category": [
            "work", 
            "group_meeting"
        ], 
        "begin": "2014-11-05T13:12:00", 
        "end": "2014-11-05T14:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-05T14:45:00", 
        "end": "2014-11-05T14:56:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-05T14:56:00", 
        "end": "2014-11-05T18:50:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-05T18:50:00", 
        "end": "2014-11-05T19:00:00"
    }, 
    {
        "category": [
            "leisure", 
            "attend_talk"
        ], 
        "begin": "2014-11-05T19:00:00", 
        "end": "2014-11-05T20:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-05T20:40:00", 
        "end": "2014-11-05T20:58:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-05T20:58:00", 
        "end": "2014-11-05T21:38:00"
    }, 
    {
        "category": [
            "food", 
            "snack"
        ], 
        "begin": "2014-11-05T21:38:00", 
        "end": "2014-11-05T21:50:00"
    }, 
    {
        "category": [
            "leisure", 
            "photography"
        ], 
        "begin": "2014-11-05T21:50:00", 
        "end": "2014-11-05T22:48:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-11-05T22:48:00", 
        "end": "2014-11-05T23:06:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-05T23:06:00", 
        "end": "2014-11-05T23:18:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-05T23:18:00", 
        "end": "2014-11-05T23:56:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-05T23:56:00", 
        "end": "2014-11-06T08:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-06T08:00:00", 
        "end": "2014-11-06T08:32:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-06T08:32:00", 
        "end": "2014-11-06T08:47:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-11-06T08:47:00", 
        "end": "2014-11-06T09:08:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-06T09:08:00", 
        "end": "2014-11-06T09:23:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-06T09:23:00", 
        "end": "2014-11-06T09:53:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-06T09:53:00", 
        "end": "2014-11-06T10:07:00"
    }, 
    {
        "category": [
            "food", 
            "grocery_trip"
        ], 
        "begin": "2014-11-06T10:07:00", 
        "end": "2014-11-06T10:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-06T10:55:00", 
        "end": "2014-11-06T11:05:00"
    }, 
    {
        "category": [
            "work", 
            "class"
        ], 
        "begin": "2014-11-06T11:05:00", 
        "end": "2014-11-06T12:30:00"
    }, 
    {
        "category": [
            "social", 
            "lunch_social"
        ], 
        "begin": "2014-11-06T12:30:00", 
        "end": "2014-11-06T13:18:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-06T13:18:00", 
        "end": "2014-11-06T17:52:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-11-06T17:52:00", 
        "end": "2014-11-06T18:07:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-06T18:07:00", 
        "end": "2014-11-06T18:20:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-06T18:20:00", 
        "end": "2014-11-06T19:43:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_with_prep"
        ], 
        "begin": "2014-11-06T19:43:00", 
        "end": "2014-11-06T21:29:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-06T21:29:00", 
        "end": "2014-11-06T23:22:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-06T23:22:00", 
        "end": "2014-11-06T23:39:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-06T23:39:00", 
        "end": "2014-11-07T00:06:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-07T00:06:00", 
        "end": "2014-11-07T07:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-07T07:40:00", 
        "end": "2014-11-07T08:10:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-07T08:10:00", 
        "end": "2014-11-07T08:21:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-11-07T08:21:00", 
        "end": "2014-11-07T08:45:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-07T08:45:00", 
        "end": "2014-11-07T09:04:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-07T09:04:00", 
        "end": "2014-11-07T09:24:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-07T09:24:00", 
        "end": "2014-11-07T12:02:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-11-07T12:02:00", 
        "end": "2014-11-07T12:35:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-07T12:35:00", 
        "end": "2014-11-07T12:49:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-11-07T12:49:00", 
        "end": "2014-11-07T15:52:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-07T15:52:00", 
        "end": "2014-11-07T16:30:00"
    }, 
    {
        "category": [
            "fitness", 
            "rock_climbing"
        ], 
        "begin": "2014-11-07T16:30:00", 
        "end": "2014-11-07T19:00:00"
    }, 
    {
        "category": [
            "social", 
            "dinner_social"
        ], 
        "begin": "2014-11-07T19:00:00", 
        "end": "2014-11-07T21:57:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-07T21:57:00", 
        "end": "2014-11-07T22:40:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-07T22:40:00", 
        "end": "2014-11-07T23:37:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-07T23:37:00", 
        "end": "2014-11-07T23:55:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-07T23:55:00", 
        "end": "2014-11-08T07:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-08T07:45:00", 
        "end": "2014-11-08T08:30:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-11-08T08:30:00", 
        "end": "2014-11-08T09:04:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-08T09:04:00", 
        "end": "2014-11-08T09:14:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-08T09:14:00", 
        "end": "2014-11-08T10:33:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-08T10:33:00", 
        "end": "2014-11-08T11:00:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-08T11:00:00", 
        "end": "2014-11-08T11:25:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-08T11:25:00", 
        "end": "2014-11-08T11:37:00"
    }, 
    {
        "category": [
            "leisure", 
            "shopping"
        ], 
        "begin": "2014-11-08T11:37:00", 
        "end": "2014-11-08T12:02:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-08T12:02:00", 
        "end": "2014-11-08T12:18:00"
    }, 
    {
        "category": [
            "leisure", 
            "bike_ride"
        ], 
        "begin": "2014-11-08T12:18:00", 
        "end": "2014-11-08T14:30:00"
    }, 
    {
        "category": [
            "food", 
            "snack"
        ], 
        "begin": "2014-11-08T14:30:00", 
        "end": "2014-11-08T14:40:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-08T14:40:00", 
        "end": "2014-11-08T15:50:00"
    }, 
    {
        "category": [
            "food", 
            "snack"
        ], 
        "begin": "2014-11-08T15:50:00", 
        "end": "2014-11-08T15:59:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-08T15:59:00", 
        "end": "2014-11-08T17:10:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-08T17:10:00", 
        "end": "2014-11-08T17:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-08T17:40:00", 
        "end": "2014-11-08T18:15:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-08T18:15:00", 
        "end": "2014-11-08T19:00:00"
    }, 
    {
        "category": [
            "social", 
            "movie_social"
        ], 
        "begin": "2014-11-08T19:00:00", 
        "end": "2014-11-08T22:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-08T22:10:00", 
        "end": "2014-11-08T23:20:00"
    }, 
    {
        "category": [
            "social", 
            "dinner_social"
        ], 
        "begin": "2014-11-08T23:20:00", 
        "end": "2014-11-09T00:10:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-09T00:10:00", 
        "end": "2014-11-09T00:23:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-09T00:23:00", 
        "end": "2014-11-09T01:12:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-09T01:12:00", 
        "end": "2014-11-09T08:27:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-09T08:27:00", 
        "end": "2014-11-09T08:57:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-09T08:57:00", 
        "end": "2014-11-09T09:09:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-09T09:09:00", 
        "end": "2014-11-09T09:31:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-09T09:31:00", 
        "end": "2014-11-09T09:50:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-09T09:50:00", 
        "end": "2014-11-09T10:15:00"
    }, 
    {
        "category": [
            "social", 
            "skype_parents"
        ], 
        "begin": "2014-11-09T10:15:00", 
        "end": "2014-11-09T10:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-09T10:40:00", 
        "end": "2014-11-09T10:57:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-09T10:57:00", 
        "end": "2014-11-09T11:35:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-09T11:35:00", 
        "end": "2014-11-09T12:43:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-11-09T12:43:00", 
        "end": "2014-11-09T13:09:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-09T13:09:00", 
        "end": "2014-11-09T13:18:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-09T13:18:00", 
        "end": "2014-11-09T14:00:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-09T14:00:00", 
        "end": "2014-11-09T16:00:00"
    }, 
    {
        "category": [
            "leisure", 
            "shopping"
        ], 
        "begin": "2014-11-09T16:00:00", 
        "end": "2014-11-09T17:00:00"
    }, 
    {
        "category": [
            "social", 
            "friend_hangout"
        ], 
        "begin": "2014-11-09T17:00:00", 
        "end": "2014-11-09T18:09:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-09T18:09:00", 
        "end": "2014-11-09T18:48:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-11-09T18:48:00", 
        "end": "2014-11-09T19:04:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-11-09T19:04:00", 
        "end": "2014-11-09T19:47:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-09T19:47:00", 
        "end": "2014-11-09T20:07:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-09T20:07:00", 
        "end": "2014-11-09T23:28:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-09T23:28:00", 
        "end": "2014-11-09T23:45:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-09T23:45:00", 
        "end": "2014-11-10T00:11:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-10T00:11:00", 
        "end": "2014-11-10T08:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-10T08:00:00", 
        "end": "2014-11-10T08:33:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-10T08:33:00", 
        "end": "2014-11-10T08:50:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-11-10T08:50:00", 
        "end": "2014-11-10T09:11:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-10T09:11:00", 
        "end": "2014-11-10T09:30:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-10T09:30:00", 
        "end": "2014-11-10T09:57:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-10T09:57:00", 
        "end": "2014-11-10T11:36:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-10T11:36:00", 
        "end": "2014-11-10T11:53:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-11-10T11:53:00", 
        "end": "2014-11-10T12:15:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-10T12:15:00", 
        "end": "2014-11-10T13:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-11-10T13:00:00", 
        "end": "2014-11-10T14:40:00"
    }, 
    {
        "category": [
            "misc", 
            "driving_test"
        ], 
        "begin": "2014-11-10T14:40:00", 
        "end": "2014-11-10T15:00:00"
    }, 
    {
        "category": [
            "social", 
            "lunch_social"
        ], 
        "begin": "2014-11-10T15:00:00", 
        "end": "2014-11-10T15:30:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-11-10T15:30:00", 
        "end": "2014-11-10T17:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-10T17:45:00", 
        "end": "2014-11-10T18:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-10T18:00:00", 
        "end": "2014-11-10T18:16:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-11-10T18:16:00", 
        "end": "2014-11-10T19:06:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-10T19:06:00", 
        "end": "2014-11-10T21:04:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-10T21:04:00", 
        "end": "2014-11-10T22:37:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-10T22:37:00", 
        "end": "2014-11-10T22:49:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-10T22:49:00", 
        "end": "2014-11-10T23:22:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-10T23:22:00", 
        "end": "2014-11-10T23:49:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-10T23:49:00", 
        "end": "2014-11-11T09:06:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-11-11T09:06:00", 
        "end": "2014-11-11T09:34:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-11T09:34:00", 
        "end": "2014-11-11T09:47:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-11-11T09:47:00", 
        "end": "2014-11-11T10:17:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast_with_prep"
        ], 
        "begin": "2014-11-11T10:17:00", 
        "end": "2014-11-11T10:56:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-11T10:56:00", 
        "end": "2014-11-11T11:17:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-11T11:17:00", 
        "end": "2014-11-11T11:47:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-11T11:47:00", 
        "end": "2014-11-11T13:31:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-11-11T13:31:00", 
        "end": "2014-11-11T14:04:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-11T14:04:00", 
        "end": "2014-11-11T17:09:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-11T17:09:00", 
        "end": "2014-11-11T17:37:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-11T17:37:00", 
        "end": "2014-11-11T18:00:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_out_by_myself"
        ], 
        "begin": "2014-11-11T18:00:00", 
        "end": "2014-11-11T18:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-11T18:20:00", 
        "end": "2014-11-11T18:47:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-11T18:47:00", 
        "end": "2014-11-11T21:52:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-11T21:52:00", 
        "end": "2014-11-11T22:18:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-11T22:18:00", 
        "end": "2014-11-11T22:28:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-11T22:28:00", 
        "end": "2014-11-11T23:04:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-11T23:04:00", 
        "end": "2014-11-11T23:19:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-11T23:19:00", 
        "end": "2014-11-11T23:35:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-11T23:35:00", 
        "end": "2014-11-12T08:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-12T08:00:00", 
        "end": "2014-11-12T08:46:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-12T08:46:00", 
        "end": "2014-11-12T08:57:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-12T08:57:00", 
        "end": "2014-11-12T09:18:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-12T09:18:00", 
        "end": "2014-11-12T09:34:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-12T09:34:00", 
        "end": "2014-11-12T09:56:00"
    }, 
    {
        "category": [
            "food", 
            "grocery_trip"
        ], 
        "begin": "2014-11-12T09:56:00", 
        "end": "2014-11-12T11:05:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-12T11:05:00", 
        "end": "2014-11-12T12:44:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-12T12:44:00", 
        "end": "2014-11-12T12:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-12T12:55:00", 
        "end": "2014-11-12T13:30:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_out_by_myself"
        ], 
        "begin": "2014-11-12T13:30:00", 
        "end": "2014-11-12T14:00:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-11-12T14:00:00", 
        "end": "2014-11-12T19:30:00"
    }, 
    {
        "category": [
            "social", 
            "dinner_social"
        ], 
        "begin": "2014-11-12T19:30:00", 
        "end": "2014-11-12T21:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-12T21:00:00", 
        "end": "2014-11-12T21:10:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-12T21:10:00", 
        "end": "2014-11-12T22:13:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-12T22:13:00", 
        "end": "2014-11-12T23:14:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-12T23:14:00", 
        "end": "2014-11-12T23:32:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-12T23:32:00", 
        "end": "2014-11-12T23:38:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-12T23:38:00", 
        "end": "2014-11-12T23:54:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-12T23:54:00", 
        "end": "2014-11-13T00:07:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-13T00:07:00", 
        "end": "2014-11-13T08:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-13T08:00:00", 
        "end": "2014-11-13T08:06:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-13T08:06:00", 
        "end": "2014-11-13T08:17:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-11-13T08:17:00", 
        "end": "2014-11-13T08:40:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-13T08:40:00", 
        "end": "2014-11-13T08:54:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-13T08:54:00", 
        "end": "2014-11-13T09:19:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-13T09:19:00", 
        "end": "2014-11-13T10:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-13T10:30:00", 
        "end": "2014-11-13T10:41:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-11-13T10:41:00", 
        "end": "2014-11-13T10:51:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-13T10:51:00", 
        "end": "2014-11-13T11:06:00"
    }, 
    {
        "category": [
            "work", 
            "class"
        ], 
        "begin": "2014-11-13T11:06:00", 
        "end": "2014-11-13T12:30:00"
    }, 
    {
        "category": [
            "social", 
            "lunch_social"
        ], 
        "begin": "2014-11-13T12:30:00", 
        "end": "2014-11-13T13:30:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-11-13T13:30:00", 
        "end": "2014-11-13T15:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-13T15:40:00", 
        "end": "2014-11-13T15:54:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-11-13T15:54:00", 
        "end": "2014-11-13T17:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-13T17:45:00", 
        "end": "2014-11-13T18:30:00"
    }, 
    {
        "category": [
            "social", 
            "movie_social"
        ], 
        "begin": "2014-11-13T18:30:00", 
        "end": "2014-11-13T21:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-13T21:30:00", 
        "end": "2014-11-13T22:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-13T22:00:00", 
        "end": "2014-11-13T22:11:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-13T22:11:00", 
        "end": "2014-11-13T23:18:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-13T23:18:00", 
        "end": "2014-11-13T23:32:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-13T23:32:00", 
        "end": "2014-11-13T23:37:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-13T23:37:00", 
        "end": "2014-11-13T23:52:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-13T23:52:00", 
        "end": "2014-11-14T08:22:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-14T08:22:00", 
        "end": "2014-11-14T08:38:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-14T08:38:00", 
        "end": "2014-11-14T08:55:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-11-14T08:55:00", 
        "end": "2014-11-14T09:20:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-14T09:20:00", 
        "end": "2014-11-14T09:37:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-14T09:37:00", 
        "end": "2014-11-14T09:46:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-14T09:46:00", 
        "end": "2014-11-14T10:12:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-14T10:12:00", 
        "end": "2014-11-14T10:43:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-14T10:43:00", 
        "end": "2014-11-14T12:42:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-14T12:42:00", 
        "end": "2014-11-14T12:47:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-11-14T12:47:00", 
        "end": "2014-11-14T13:08:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-14T13:08:00", 
        "end": "2014-11-14T13:20:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-11-14T13:20:00", 
        "end": "2014-11-14T17:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-14T17:00:00", 
        "end": "2014-11-14T17:40:00"
    }, 
    {
        "category": [
            "fitness", 
            "rock_climbing"
        ], 
        "begin": "2014-11-14T17:40:00", 
        "end": "2014-11-14T21:00:00"
    }, 
    {
        "category": [
            "social", 
            "dinner_social"
        ], 
        "begin": "2014-11-14T21:00:00", 
        "end": "2014-11-14T22:15:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-14T22:15:00", 
        "end": "2014-11-14T23:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-14T23:20:00", 
        "end": "2014-11-14T23:38:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-14T23:38:00", 
        "end": "2014-11-15T00:03:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-15T00:03:00", 
        "end": "2014-11-15T00:22:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-15T00:22:00", 
        "end": "2014-11-15T09:10:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-11-15T09:10:00", 
        "end": "2014-11-15T09:28:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-15T09:28:00", 
        "end": "2014-11-15T10:00:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-15T10:00:00", 
        "end": "2014-11-15T10:12:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-15T10:12:00", 
        "end": "2014-11-15T10:19:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-15T10:19:00", 
        "end": "2014-11-15T11:00:00"
    }, 
    {
        "category": [
            "social", 
            "skype_parents"
        ], 
        "begin": "2014-11-15T11:00:00", 
        "end": "2014-11-15T11:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-15T11:40:00", 
        "end": "2014-11-15T12:40:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-11-15T12:40:00", 
        "end": "2014-11-15T13:16:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-15T13:16:00", 
        "end": "2014-11-15T17:29:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_with_prep"
        ], 
        "begin": "2014-11-15T17:29:00", 
        "end": "2014-11-15T19:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-15T19:10:00", 
        "end": "2014-11-15T19:21:00"
    }, 
    {
        "category": [
            "social", 
            "party"
        ], 
        "begin": "2014-11-15T19:21:00", 
        "end": "2014-11-15T23:30:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-15T23:30:00", 
        "end": "2014-11-15T23:46:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-15T23:46:00", 
        "end": "2014-11-16T00:08:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-16T00:08:00", 
        "end": "2014-11-16T09:20:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-16T09:20:00", 
        "end": "2014-11-16T09:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-16T09:55:00", 
        "end": "2014-11-16T10:14:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-16T10:14:00", 
        "end": "2014-11-16T10:35:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-16T10:35:00", 
        "end": "2014-11-16T11:50:00"
    }, 
    {
        "category": [
            "overhead", 
            "bureaucracy"
        ], 
        "begin": "2014-11-16T11:50:00", 
        "end": "2014-11-16T12:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-16T12:00:00", 
        "end": "2014-11-16T12:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-11-16T12:40:00", 
        "end": "2014-11-16T13:10:00"
    }, 
    {
        "category": [
            "social", 
            "friend_hangout"
        ], 
        "begin": "2014-11-16T13:10:00", 
        "end": "2014-11-16T14:15:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-16T14:15:00", 
        "end": "2014-11-16T14:35:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-11-16T14:35:00", 
        "end": "2014-11-16T14:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-16T14:45:00", 
        "end": "2014-11-16T15:00:00"
    }, 
    {
        "category": [
            "social", 
            "meetup"
        ], 
        "begin": "2014-11-16T15:00:00", 
        "end": "2014-11-16T17:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-16T17:00:00", 
        "end": "2014-11-16T17:35:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-16T17:35:00", 
        "end": "2014-11-16T18:15:00"
    }, 
    {
        "category": [
            "social", 
            "dinner_social"
        ], 
        "begin": "2014-11-16T18:15:00", 
        "end": "2014-11-16T21:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-16T21:00:00", 
        "end": "2014-11-16T21:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-16T21:10:00", 
        "end": "2014-11-16T22:29:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-11-16T22:29:00", 
        "end": "2014-11-16T23:13:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-16T23:13:00", 
        "end": "2014-11-16T23:30:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-16T23:30:00", 
        "end": "2014-11-17T00:09:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-17T00:09:00", 
        "end": "2014-11-17T08:05:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-17T08:05:00", 
        "end": "2014-11-17T08:35:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-17T08:35:00", 
        "end": "2014-11-17T08:47:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-11-17T08:47:00", 
        "end": "2014-11-17T08:51:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-11-17T08:51:00", 
        "end": "2014-11-17T09:12:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-17T09:12:00", 
        "end": "2014-11-17T09:31:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-17T09:31:00", 
        "end": "2014-11-17T09:56:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-17T09:56:00", 
        "end": "2014-11-17T12:33:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-11-17T12:33:00", 
        "end": "2014-11-17T13:05:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-17T13:05:00", 
        "end": "2014-11-17T13:18:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-11-17T13:18:00", 
        "end": "2014-11-17T15:25:00"
    }, 
    {
        "category": [
            "leisure", 
            "attend_talk"
        ], 
        "begin": "2014-11-17T15:25:00", 
        "end": "2014-11-17T16:46:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-11-17T16:46:00", 
        "end": "2014-11-17T18:47:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-17T18:47:00", 
        "end": "2014-11-17T19:29:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "library_trip"
        ], 
        "begin": "2014-11-17T19:29:00", 
        "end": "2014-11-17T20:00:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-11-17T20:00:00", 
        "end": "2014-11-17T20:50:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-17T20:50:00", 
        "end": "2014-11-17T23:50:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-17T23:50:00", 
        "end": "2014-11-18T00:02:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-18T00:02:00", 
        "end": "2014-11-18T00:14:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-18T00:14:00", 
        "end": "2014-11-18T08:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-18T08:30:00", 
        "end": "2014-11-18T08:40:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-18T08:40:00", 
        "end": "2014-11-18T09:18:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-18T09:18:00", 
        "end": "2014-11-18T09:35:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-18T09:35:00", 
        "end": "2014-11-18T09:54:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-18T09:54:00", 
        "end": "2014-11-18T10:00:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-18T10:00:00", 
        "end": "2014-11-18T10:50:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-11-18T10:50:00", 
        "end": "2014-11-18T11:10:00"
    }, 
    {
        "category": [
            "work", 
            "class"
        ], 
        "begin": "2014-11-18T11:10:00", 
        "end": "2014-11-18T12:20:00"
    }, 
    {
        "category": [
            "social", 
            "lunch_social"
        ], 
        "begin": "2014-11-18T12:20:00", 
        "end": "2014-11-18T13:00:00"
    }, 
    {
        "category": [
            "social", 
            "friend_hangout"
        ], 
        "begin": "2014-11-18T13:00:00", 
        "end": "2014-11-18T13:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-18T13:20:00", 
        "end": "2014-11-18T13:30:00"
    }, 
    {
        "category": [
            "leisure", 
            "attend_talk"
        ], 
        "begin": "2014-11-18T13:30:00", 
        "end": "2014-11-18T15:15:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-18T15:15:00", 
        "end": "2014-11-18T15:25:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-18T15:25:00", 
        "end": "2014-11-18T15:38:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-18T15:38:00", 
        "end": "2014-11-18T16:00:00"
    }, 
    {
        "category": [
            "work", 
            "colleague_meeting"
        ], 
        "begin": "2014-11-18T16:00:00", 
        "end": "2014-11-18T17:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-18T17:00:00", 
        "end": "2014-11-18T17:11:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-11-18T17:11:00", 
        "end": "2014-11-18T18:47:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-18T18:47:00", 
        "end": "2014-11-18T19:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-18T19:00:00", 
        "end": "2014-11-18T19:06:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-11-18T19:06:00", 
        "end": "2014-11-18T19:38:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-18T19:38:00", 
        "end": "2014-11-18T19:59:00"
    }, 
    {
        "category": [
            "leisure", 
            "shopping"
        ], 
        "begin": "2014-11-18T19:59:00", 
        "end": "2014-11-18T20:26:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-11-18T20:26:00", 
        "end": "2014-11-18T21:14:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-11-18T21:14:00", 
        "end": "2014-11-18T22:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-18T22:55:00", 
        "end": "2014-11-18T23:03:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-11-18T23:03:00", 
        "end": "2014-11-18T23:10:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-18T23:10:00", 
        "end": "2014-11-18T23:24:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-18T23:24:00", 
        "end": "2014-11-18T23:30:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-18T23:30:00", 
        "end": "2014-11-19T08:04:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-19T08:04:00", 
        "end": "2014-11-19T08:09:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-19T08:09:00", 
        "end": "2014-11-19T08:44:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-19T08:44:00", 
        "end": "2014-11-19T08:51:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-19T08:51:00", 
        "end": "2014-11-19T09:05:00"
    }, 
    {
        "category": [
            "work", 
            "colleague_meeting"
        ], 
        "begin": "2014-11-19T09:05:00", 
        "end": "2014-11-19T10:21:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-19T10:21:00", 
        "end": "2014-11-19T10:35:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-19T10:35:00", 
        "end": "2014-11-19T13:00:00"
    }, 
    {
        "category": [
            "work", 
            "group_meeting"
        ], 
        "begin": "2014-11-19T13:00:00", 
        "end": "2014-11-19T15:05:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-19T15:05:00", 
        "end": "2014-11-19T15:17:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-19T15:17:00", 
        "end": "2014-11-19T19:02:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-19T19:02:00", 
        "end": "2014-11-19T19:36:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-19T19:36:00", 
        "end": "2014-11-19T19:49:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-19T19:49:00", 
        "end": "2014-11-19T19:55:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-11-19T19:55:00", 
        "end": "2014-11-19T20:44:00"
    }, 
    {
        "category": [
            "leisure", 
            "shopping"
        ], 
        "begin": "2014-11-19T20:44:00", 
        "end": "2014-11-19T22:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-19T22:40:00", 
        "end": "2014-11-19T22:45:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-19T22:45:00", 
        "end": "2014-11-19T22:56:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-19T22:56:00", 
        "end": "2014-11-19T23:08:00"
    }, 
    {
        "category": [
            "overhead", 
            "laundry"
        ], 
        "begin": "2014-11-19T23:08:00", 
        "end": "2014-11-19T23:16:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-11-19T23:16:00", 
        "end": "2014-11-19T23:24:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-19T23:24:00", 
        "end": "2014-11-19T23:30:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-19T23:30:00", 
        "end": "2014-11-20T09:25:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-20T09:25:00", 
        "end": "2014-11-20T09:46:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-20T09:46:00", 
        "end": "2014-11-20T10:29:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-20T10:29:00", 
        "end": "2014-11-20T10:43:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-20T10:43:00", 
        "end": "2014-11-20T10:57:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-20T10:57:00", 
        "end": "2014-11-20T11:10:00"
    }, 
    {
        "category": [
            "work", 
            "class"
        ], 
        "begin": "2014-11-20T11:10:00", 
        "end": "2014-11-20T12:30:00"
    }, 
    {
        "category": [
            "social", 
            "lunch_social"
        ], 
        "begin": "2014-11-20T12:30:00", 
        "end": "2014-11-20T13:50:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-20T13:50:00", 
        "end": "2014-11-20T14:00:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-20T14:00:00", 
        "end": "2014-11-20T15:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-11-20T15:20:00", 
        "end": "2014-11-20T15:40:00"
    }, 
    {
        "category": [
            "work", 
            "advisor_meeting"
        ], 
        "begin": "2014-11-20T15:40:00", 
        "end": "2014-11-20T15:52:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-20T15:52:00", 
        "end": "2014-11-20T17:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-20T17:10:00", 
        "end": "2014-11-20T17:30:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-20T17:30:00", 
        "end": "2014-11-20T19:06:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-20T19:06:00", 
        "end": "2014-11-20T19:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-20T19:10:00", 
        "end": "2014-11-20T19:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-20T19:30:00", 
        "end": "2014-11-20T19:37:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-11-20T19:37:00", 
        "end": "2014-11-20T20:40:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-20T20:40:00", 
        "end": "2014-11-20T21:33:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-20T21:33:00", 
        "end": "2014-11-20T22:14:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-20T22:14:00", 
        "end": "2014-11-20T22:22:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-20T22:22:00", 
        "end": "2014-11-20T23:05:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-11-20T23:05:00", 
        "end": "2014-11-20T23:16:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-20T23:16:00", 
        "end": "2014-11-20T23:29:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-20T23:29:00", 
        "end": "2014-11-20T23:57:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-20T23:57:00", 
        "end": "2014-11-21T09:19:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-21T09:19:00", 
        "end": "2014-11-21T09:25:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-11-21T09:25:00", 
        "end": "2014-11-21T09:39:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-21T09:39:00", 
        "end": "2014-11-21T10:28:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-21T10:28:00", 
        "end": "2014-11-21T10:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "bureaucracy"
        ], 
        "begin": "2014-11-21T10:45:00", 
        "end": "2014-11-21T11:10:00"
    }, 
    {
        "category": [
            "food", 
            "grocery_trip"
        ], 
        "begin": "2014-11-21T11:10:00", 
        "end": "2014-11-21T12:36:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_with_prep"
        ], 
        "begin": "2014-11-21T12:36:00", 
        "end": "2014-11-21T13:14:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-21T13:14:00", 
        "end": "2014-11-21T13:26:00"
    }, 
    {
        "category": [
            "overhead", 
            "bureaucracy"
        ], 
        "begin": "2014-11-21T13:26:00", 
        "end": "2014-11-21T13:35:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-21T13:35:00", 
        "end": "2014-11-21T13:39:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-21T13:39:00", 
        "end": "2014-11-21T18:12:00"
    }, 
    {
        "category": [
            "food", 
            "grocery_trip"
        ], 
        "begin": "2014-11-21T18:12:00", 
        "end": "2014-11-21T18:50:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-21T18:50:00", 
        "end": "2014-11-21T18:56:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_with_prep"
        ], 
        "begin": "2014-11-21T18:56:00", 
        "end": "2014-11-21T20:44:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-11-21T20:44:00", 
        "end": "2014-11-21T20:55:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-11-21T20:55:00", 
        "end": "2014-11-21T21:52:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-21T21:52:00", 
        "end": "2014-11-21T22:15:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-21T22:15:00", 
        "end": "2014-11-21T22:24:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-11-21T22:24:00", 
        "end": "2014-11-21T23:41:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-21T23:41:00", 
        "end": "2014-11-21T23:54:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-21T23:54:00", 
        "end": "2014-11-22T00:04:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-22T00:04:00", 
        "end": "2014-11-22T08:27:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-22T08:27:00", 
        "end": "2014-11-22T08:32:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-11-22T08:32:00", 
        "end": "2014-11-22T09:08:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-22T09:08:00", 
        "end": "2014-11-22T09:44:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-22T09:44:00", 
        "end": "2014-11-22T10:24:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-22T10:24:00", 
        "end": "2014-11-22T10:49:00"
    }, 
    {
        "category": [
            "social", 
            "skype_parents"
        ], 
        "begin": "2014-11-22T10:49:00", 
        "end": "2014-11-22T11:21:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-22T11:21:00", 
        "end": "2014-11-22T11:59:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-11-22T11:59:00", 
        "end": "2014-11-22T12:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-22T12:20:00", 
        "end": "2014-11-22T12:27:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-22T12:27:00", 
        "end": "2014-11-22T14:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-22T14:45:00", 
        "end": "2014-11-22T15:20:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-22T15:20:00", 
        "end": "2014-11-22T15:40:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-22T15:40:00", 
        "end": "2014-11-22T19:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-22T19:00:00", 
        "end": "2014-11-22T19:18:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-11-22T19:18:00", 
        "end": "2014-11-22T20:00:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-11-22T20:00:00", 
        "end": "2014-11-22T21:23:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-22T21:23:00", 
        "end": "2014-11-22T21:47:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-22T21:47:00", 
        "end": "2014-11-22T22:14:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-22T22:14:00", 
        "end": "2014-11-22T23:09:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-22T23:09:00", 
        "end": "2014-11-22T23:19:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-22T23:19:00", 
        "end": "2014-11-22T23:27:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-22T23:27:00", 
        "end": "2014-11-22T23:43:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-22T23:43:00", 
        "end": "2014-11-23T00:07:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-23T00:07:00", 
        "end": "2014-11-23T08:29:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-11-23T08:29:00", 
        "end": "2014-11-23T09:00:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-23T09:00:00", 
        "end": "2014-11-23T09:39:00"
    }, 
    {
        "category": [
            "overhead", 
            "finances"
        ], 
        "begin": "2014-11-23T09:39:00", 
        "end": "2014-11-23T10:29:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-23T10:29:00", 
        "end": "2014-11-23T10:51:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-23T10:51:00", 
        "end": "2014-11-23T11:52:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-23T11:52:00", 
        "end": "2014-11-23T12:18:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-23T12:18:00", 
        "end": "2014-11-23T13:25:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-11-23T13:25:00", 
        "end": "2014-11-23T13:52:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-23T13:52:00", 
        "end": "2014-11-23T13:58:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-23T13:58:00", 
        "end": "2014-11-23T14:09:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-23T14:09:00", 
        "end": "2014-11-23T14:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-11-23T14:30:00", 
        "end": "2014-11-23T14:40:00"
    }, 
    {
        "category": [
            "leisure", 
            "photography"
        ], 
        "begin": "2014-11-23T14:40:00", 
        "end": "2014-11-23T17:42:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-23T17:42:00", 
        "end": "2014-11-23T18:14:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-23T18:14:00", 
        "end": "2014-11-23T18:25:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-11-23T18:25:00", 
        "end": "2014-11-23T18:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-23T18:55:00", 
        "end": "2014-11-23T19:31:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-23T19:31:00", 
        "end": "2014-11-23T20:00:00"
    }, 
    {
        "category": [
            "social", 
            "party"
        ], 
        "begin": "2014-11-23T20:00:00", 
        "end": "2014-11-24T01:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-24T01:00:00", 
        "end": "2014-11-24T01:27:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-24T01:27:00", 
        "end": "2014-11-24T01:47:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-24T01:47:00", 
        "end": "2014-11-24T10:07:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-24T10:07:00", 
        "end": "2014-11-24T10:17:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-11-24T10:17:00", 
        "end": "2014-11-24T10:40:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-24T10:40:00", 
        "end": "2014-11-24T10:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-24T10:55:00", 
        "end": "2014-11-24T11:05:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-24T11:05:00", 
        "end": "2014-11-24T11:28:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-24T11:28:00", 
        "end": "2014-11-24T12:17:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-24T12:17:00", 
        "end": "2014-11-24T12:41:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-24T12:41:00", 
        "end": "2014-11-24T12:48:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-11-24T12:48:00", 
        "end": "2014-11-24T13:05:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-24T13:05:00", 
        "end": "2014-11-24T13:13:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-11-24T13:13:00", 
        "end": "2014-11-24T13:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-24T13:45:00", 
        "end": "2014-11-24T13:50:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-24T13:50:00", 
        "end": "2014-11-24T19:35:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-24T19:35:00", 
        "end": "2014-11-24T20:00:00"
    }, 
    {
        "category": [
            "food", 
            "grocery_trip"
        ], 
        "begin": "2014-11-24T20:00:00", 
        "end": "2014-11-24T20:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-24T20:10:00", 
        "end": "2014-11-24T20:25:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-11-24T20:25:00", 
        "end": "2014-11-24T21:03:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-24T21:03:00", 
        "end": "2014-11-24T21:12:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-24T21:12:00", 
        "end": "2014-11-24T23:40:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-24T23:40:00", 
        "end": "2014-11-24T23:54:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-11-24T23:54:00", 
        "end": "2014-11-25T00:14:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-25T00:14:00", 
        "end": "2014-11-25T00:18:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-25T00:18:00", 
        "end": "2014-11-25T08:00:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-11-25T08:00:00", 
        "end": "2014-11-25T08:30:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-25T08:30:00", 
        "end": "2014-11-25T08:46:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-11-25T08:46:00", 
        "end": "2014-11-25T09:14:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-25T09:14:00", 
        "end": "2014-11-25T09:34:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-25T09:34:00", 
        "end": "2014-11-25T10:04:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-25T10:04:00", 
        "end": "2014-11-25T10:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-25T10:55:00", 
        "end": "2014-11-25T11:05:00"
    }, 
    {
        "category": [
            "work", 
            "class"
        ], 
        "begin": "2014-11-25T11:05:00", 
        "end": "2014-11-25T12:30:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_out_by_myself"
        ], 
        "begin": "2014-11-25T12:30:00", 
        "end": "2014-11-25T13:10:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-11-25T13:10:00", 
        "end": "2014-11-25T19:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-25T19:40:00", 
        "end": "2014-11-25T19:56:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-11-25T19:56:00", 
        "end": "2014-11-25T21:00:00"
    }, 
    {
        "category": [
            "maintenance", 
            "bike_maintenance"
        ], 
        "begin": "2014-11-25T21:00:00", 
        "end": "2014-11-25T21:27:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-25T21:27:00", 
        "end": "2014-11-25T22:00:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-25T22:00:00", 
        "end": "2014-11-25T22:36:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-25T22:36:00", 
        "end": "2014-11-25T22:41:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-25T22:41:00", 
        "end": "2014-11-25T22:46:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-25T22:46:00", 
        "end": "2014-11-25T22:59:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-25T22:59:00", 
        "end": "2014-11-25T23:20:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-25T23:20:00", 
        "end": "2014-11-26T08:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-26T08:00:00", 
        "end": "2014-11-26T08:06:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-11-26T08:06:00", 
        "end": "2014-11-26T08:46:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-26T08:46:00", 
        "end": "2014-11-26T08:52:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-26T08:52:00", 
        "end": "2014-11-26T09:01:00"
    }, 
    {
        "category": [
            "work", 
            "advisor_meeting"
        ], 
        "begin": "2014-11-26T09:01:00", 
        "end": "2014-11-26T10:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-26T10:00:00", 
        "end": "2014-11-26T10:11:00"
    }, 
    {
        "category": [
            "food", 
            "snack"
        ], 
        "begin": "2014-11-26T10:11:00", 
        "end": "2014-11-26T10:45:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-26T10:45:00", 
        "end": "2014-11-26T14:19:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_out_by_myself"
        ], 
        "begin": "2014-11-26T14:19:00", 
        "end": "2014-11-26T14:57:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-26T14:57:00", 
        "end": "2014-11-26T18:38:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-26T18:38:00", 
        "end": "2014-11-26T19:05:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-26T19:05:00", 
        "end": "2014-11-26T19:33:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_out_by_myself"
        ], 
        "begin": "2014-11-26T19:33:00", 
        "end": "2014-11-26T20:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-26T20:10:00", 
        "end": "2014-11-26T20:15:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-26T20:15:00", 
        "end": "2014-11-26T20:28:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-26T20:28:00", 
        "end": "2014-11-26T20:54:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-26T20:54:00", 
        "end": "2014-11-26T21:20:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-26T21:20:00", 
        "end": "2014-11-26T23:06:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-26T23:06:00", 
        "end": "2014-11-26T23:24:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-26T23:24:00", 
        "end": "2014-11-26T23:43:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-26T23:43:00", 
        "end": "2014-11-27T08:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-27T08:20:00", 
        "end": "2014-11-27T08:49:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-27T08:49:00", 
        "end": "2014-11-27T09:06:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-11-27T09:06:00", 
        "end": "2014-11-27T09:31:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-27T09:31:00", 
        "end": "2014-11-27T09:50:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-27T09:50:00", 
        "end": "2014-11-27T10:17:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-27T10:17:00", 
        "end": "2014-11-27T10:42:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-11-27T10:42:00", 
        "end": "2014-11-27T12:00:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-11-27T12:00:00", 
        "end": "2014-11-27T12:32:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-27T12:32:00", 
        "end": "2014-11-27T12:43:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-27T12:43:00", 
        "end": "2014-11-27T12:52:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-27T12:52:00", 
        "end": "2014-11-27T17:54:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-27T17:54:00", 
        "end": "2014-11-27T18:40:00"
    }, 
    {
        "category": [
            "social", 
            "dinner_social"
        ], 
        "begin": "2014-11-27T18:40:00", 
        "end": "2014-11-27T20:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-27T20:00:00", 
        "end": "2014-11-27T20:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-11-27T20:20:00", 
        "end": "2014-11-27T20:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-27T20:40:00", 
        "end": "2014-11-27T21:00:00"
    }, 
    {
        "category": [
            "social", 
            "friend_hangout"
        ], 
        "begin": "2014-11-27T21:00:00", 
        "end": "2014-11-27T22:30:00"
    }, 
    {
        "category": [
            "social", 
            "movie_social"
        ], 
        "begin": "2014-11-27T22:30:00", 
        "end": "2014-11-28T00:20:00"
    }, 
    {
        "category": [
            "social", 
            "friend_hangout"
        ], 
        "begin": "2014-11-28T00:20:00", 
        "end": "2014-11-28T02:32:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-28T02:32:00", 
        "end": "2014-11-28T02:42:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-11-28T02:42:00", 
        "end": "2014-11-28T02:51:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-28T02:51:00", 
        "end": "2014-11-28T08:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-28T08:30:00", 
        "end": "2014-11-28T08:46:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-11-28T08:46:00", 
        "end": "2014-11-28T08:54:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-28T08:54:00", 
        "end": "2014-11-28T09:07:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-28T09:07:00", 
        "end": "2014-11-28T09:29:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-28T09:29:00", 
        "end": "2014-11-28T09:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-28T09:55:00", 
        "end": "2014-11-28T10:03:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-28T10:03:00", 
        "end": "2014-11-28T10:55:00"
    }, 
    {
        "category": [
            "social", 
            "hike_social"
        ], 
        "begin": "2014-11-28T10:55:00", 
        "end": "2014-11-28T14:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-28T14:30:00", 
        "end": "2014-11-28T15:25:00"
    }, 
    {
        "category": [
            "food", 
            "snack"
        ], 
        "begin": "2014-11-28T15:25:00", 
        "end": "2014-11-28T15:47:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-28T15:47:00", 
        "end": "2014-11-28T16:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-28T16:55:00", 
        "end": "2014-11-28T18:02:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-28T18:02:00", 
        "end": "2014-11-28T20:13:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-11-28T20:13:00", 
        "end": "2014-11-28T21:02:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-28T21:02:00", 
        "end": "2014-11-28T21:06:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-28T21:06:00", 
        "end": "2014-11-28T21:17:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-28T21:17:00", 
        "end": "2014-11-28T21:41:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-28T21:41:00", 
        "end": "2014-11-28T21:58:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-28T21:58:00", 
        "end": "2014-11-28T23:22:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-28T23:22:00", 
        "end": "2014-11-28T23:40:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-28T23:40:00", 
        "end": "2014-11-29T09:07:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-29T09:07:00", 
        "end": "2014-11-29T09:20:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-29T09:20:00", 
        "end": "2014-11-29T09:35:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-11-29T09:35:00", 
        "end": "2014-11-29T09:57:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-29T09:57:00", 
        "end": "2014-11-29T10:08:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-29T10:08:00", 
        "end": "2014-11-29T10:37:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-11-29T10:37:00", 
        "end": "2014-11-29T10:54:00"
    }, 
    {
        "category": [
            "social", 
            "skype_parents"
        ], 
        "begin": "2014-11-29T10:54:00", 
        "end": "2014-11-29T11:10:00"
    }, 
    {
        "category": [
            "maintenance", 
            "haircut"
        ], 
        "begin": "2014-11-29T11:10:00", 
        "end": "2014-11-29T11:45:00"
    }, 
    {
        "category": [
            "food", 
            "grocery_trip"
        ], 
        "begin": "2014-11-29T11:45:00", 
        "end": "2014-11-29T12:33:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-11-29T12:33:00", 
        "end": "2014-11-29T13:01:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-29T13:01:00", 
        "end": "2014-11-29T13:13:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-11-29T13:13:00", 
        "end": "2014-11-29T19:29:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_out_by_myself"
        ], 
        "begin": "2014-11-29T19:29:00", 
        "end": "2014-11-29T20:12:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-11-29T20:12:00", 
        "end": "2014-11-29T20:35:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-29T20:35:00", 
        "end": "2014-11-29T23:43:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-11-29T23:43:00", 
        "end": "2014-11-29T23:51:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-29T23:51:00", 
        "end": "2014-11-30T00:07:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-30T00:07:00", 
        "end": "2014-11-30T09:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-30T09:00:00", 
        "end": "2014-11-30T10:07:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-11-30T10:07:00", 
        "end": "2014-11-30T10:18:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-11-30T10:18:00", 
        "end": "2014-11-30T10:31:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-11-30T10:31:00", 
        "end": "2014-11-30T10:37:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-11-30T10:37:00", 
        "end": "2014-11-30T11:27:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-30T11:27:00", 
        "end": "2014-11-30T12:22:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-11-30T12:22:00", 
        "end": "2014-11-30T13:04:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-30T13:04:00", 
        "end": "2014-11-30T14:13:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-30T14:13:00", 
        "end": "2014-11-30T15:01:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-30T15:01:00", 
        "end": "2014-11-30T15:26:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-11-30T15:26:00", 
        "end": "2014-11-30T15:32:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-30T15:32:00", 
        "end": "2014-11-30T15:42:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-30T15:42:00", 
        "end": "2014-11-30T17:07:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-30T17:07:00", 
        "end": "2014-11-30T17:21:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-30T17:21:00", 
        "end": "2014-11-30T19:16:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-11-30T19:16:00", 
        "end": "2014-11-30T19:29:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-11-30T19:29:00", 
        "end": "2014-11-30T21:19:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-11-30T21:19:00", 
        "end": "2014-11-30T21:28:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-11-30T21:28:00", 
        "end": "2014-11-30T23:07:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-11-30T23:07:00", 
        "end": "2014-11-30T23:18:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-11-30T23:18:00", 
        "end": "2014-11-30T23:34:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-11-30T23:34:00", 
        "end": "2014-11-30T23:58:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-11-30T23:58:00", 
        "end": "2014-12-01T08:04:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-01T08:04:00", 
        "end": "2014-12-01T08:20:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-12-01T08:20:00", 
        "end": "2014-12-01T08:28:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-01T08:28:00", 
        "end": "2014-12-01T08:44:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-12-01T08:44:00", 
        "end": "2014-12-01T09:08:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-01T09:08:00", 
        "end": "2014-12-01T09:16:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast_with_prep"
        ], 
        "begin": "2014-12-01T09:16:00", 
        "end": "2014-12-01T09:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-01T09:45:00", 
        "end": "2014-12-01T09:51:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-01T09:51:00", 
        "end": "2014-12-01T10:12:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-01T10:12:00", 
        "end": "2014-12-01T10:36:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-01T10:36:00", 
        "end": "2014-12-01T12:01:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-01T12:01:00", 
        "end": "2014-12-01T12:13:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-12-01T12:13:00", 
        "end": "2014-12-01T12:45:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "reading_papers"
        ], 
        "begin": "2014-12-01T12:45:00", 
        "end": "2014-12-01T13:22:00"
    }, 
    {
        "category": [
            "work", 
            "homework"
        ], 
        "begin": "2014-12-01T13:22:00", 
        "end": "2014-12-01T15:13:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-01T15:13:00", 
        "end": "2014-12-01T15:28:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-01T15:28:00", 
        "end": "2014-12-01T18:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-01T18:00:00", 
        "end": "2014-12-01T18:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-01T18:20:00", 
        "end": "2014-12-01T18:27:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-12-01T18:27:00", 
        "end": "2014-12-01T18:52:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-01T18:52:00", 
        "end": "2014-12-01T19:08:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-12-01T19:08:00", 
        "end": "2014-12-01T19:36:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-12-01T19:36:00", 
        "end": "2014-12-01T23:58:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-01T23:58:00", 
        "end": "2014-12-02T00:16:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-02T00:16:00", 
        "end": "2014-12-02T00:29:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-02T00:29:00", 
        "end": "2014-12-02T08:12:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-02T08:12:00", 
        "end": "2014-12-02T08:39:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-02T08:39:00", 
        "end": "2014-12-02T08:54:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-12-02T08:54:00", 
        "end": "2014-12-02T09:20:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-02T09:20:00", 
        "end": "2014-12-02T09:32:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-02T09:32:00", 
        "end": "2014-12-02T09:46:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-02T09:46:00", 
        "end": "2014-12-02T10:13:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-02T10:13:00", 
        "end": "2014-12-02T10:39:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-02T10:39:00", 
        "end": "2014-12-02T10:57:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-12-02T10:57:00", 
        "end": "2014-12-02T11:10:00"
    }, 
    {
        "category": [
            "work", 
            "class"
        ], 
        "begin": "2014-12-02T11:10:00", 
        "end": "2014-12-02T12:30:00"
    }, 
    {
        "category": [
            "social", 
            "lunch_social"
        ], 
        "begin": "2014-12-02T12:30:00", 
        "end": "2014-12-02T13:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-02T13:20:00", 
        "end": "2014-12-02T13:32:00"
    }, 
    {
        "category": [
            "misc", 
            "driving_lesson"
        ], 
        "begin": "2014-12-02T13:32:00", 
        "end": "2014-12-02T15:38:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-02T15:38:00", 
        "end": "2014-12-02T15:44:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-02T15:44:00", 
        "end": "2014-12-02T16:01:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-02T16:01:00", 
        "end": "2014-12-02T19:39:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-02T19:39:00", 
        "end": "2014-12-02T19:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-02T19:55:00", 
        "end": "2014-12-02T20:11:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-02T20:11:00", 
        "end": "2014-12-02T20:22:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-12-02T20:22:00", 
        "end": "2014-12-02T20:59:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-02T20:59:00", 
        "end": "2014-12-02T21:22:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-12-02T21:22:00", 
        "end": "2014-12-02T22:34:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-02T22:34:00", 
        "end": "2014-12-02T22:42:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-02T22:42:00", 
        "end": "2014-12-02T23:07:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-02T23:07:00", 
        "end": "2014-12-02T23:21:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-02T23:21:00", 
        "end": "2014-12-02T23:37:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-02T23:37:00", 
        "end": "2014-12-03T08:04:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-03T08:04:00", 
        "end": "2014-12-03T08:41:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-03T08:41:00", 
        "end": "2014-12-03T08:49:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-03T08:49:00", 
        "end": "2014-12-03T09:05:00"
    }, 
    {
        "category": [
            "work", 
            "advisor_meeting"
        ], 
        "begin": "2014-12-03T09:05:00", 
        "end": "2014-12-03T09:55:00"
    }, 
    {
        "category": [
            "food", 
            "snack"
        ], 
        "begin": "2014-12-03T09:55:00", 
        "end": "2014-12-03T10:26:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-03T10:26:00", 
        "end": "2014-12-03T10:30:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-03T10:30:00", 
        "end": "2014-12-03T12:34:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-03T12:34:00", 
        "end": "2014-12-03T13:11:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-03T13:11:00", 
        "end": "2014-12-03T13:25:00"
    }, 
    {
        "category": [
            "work", 
            "group_meeting"
        ], 
        "begin": "2014-12-03T13:25:00", 
        "end": "2014-12-03T15:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-03T15:00:00", 
        "end": "2014-12-03T15:10:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-03T15:10:00", 
        "end": "2014-12-03T18:38:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-12-03T18:38:00", 
        "end": "2014-12-03T19:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-03T19:10:00", 
        "end": "2014-12-03T19:38:00"
    }, 
    {
        "category": [
            "social", 
            "movie_social"
        ], 
        "begin": "2014-12-03T19:38:00", 
        "end": "2014-12-03T21:23:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-03T21:23:00", 
        "end": "2014-12-03T21:44:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-03T21:44:00", 
        "end": "2014-12-03T22:00:00"
    }, 
    {
        "category": [
            "food", 
            "snack"
        ], 
        "begin": "2014-12-03T22:00:00", 
        "end": "2014-12-03T22:07:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-03T22:07:00", 
        "end": "2014-12-03T22:26:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-03T22:26:00", 
        "end": "2014-12-03T22:46:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-03T22:46:00", 
        "end": "2014-12-03T22:58:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-12-03T22:58:00", 
        "end": "2014-12-03T23:35:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-03T23:35:00", 
        "end": "2014-12-03T23:48:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-03T23:48:00", 
        "end": "2014-12-03T23:53:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-03T23:53:00", 
        "end": "2014-12-04T08:38:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-04T08:38:00", 
        "end": "2014-12-04T08:48:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-04T08:48:00", 
        "end": "2014-12-04T09:04:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-12-04T09:04:00", 
        "end": "2014-12-04T09:27:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-04T09:27:00", 
        "end": "2014-12-04T09:42:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-04T09:42:00", 
        "end": "2014-12-04T10:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "bureaucracy"
        ], 
        "begin": "2014-12-04T10:00:00", 
        "end": "2014-12-04T10:13:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-12-04T10:13:00", 
        "end": "2014-12-04T10:16:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-04T10:16:00", 
        "end": "2014-12-04T10:36:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-04T10:36:00", 
        "end": "2014-12-04T10:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-04T10:45:00", 
        "end": "2014-12-04T11:05:00"
    }, 
    {
        "category": [
            "work", 
            "class"
        ], 
        "begin": "2014-12-04T11:05:00", 
        "end": "2014-12-04T12:30:00"
    }, 
    {
        "category": [
            "social", 
            "lunch_social"
        ], 
        "begin": "2014-12-04T12:30:00", 
        "end": "2014-12-04T13:02:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-04T13:02:00", 
        "end": "2014-12-04T13:07:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-04T13:07:00", 
        "end": "2014-12-04T17:15:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-04T17:15:00", 
        "end": "2014-12-04T17:26:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-04T17:26:00", 
        "end": "2014-12-04T19:00:00"
    }, 
    {
        "category": [
            "social", 
            "meetup"
        ], 
        "begin": "2014-12-04T19:00:00", 
        "end": "2014-12-04T20:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-04T20:55:00", 
        "end": "2014-12-04T21:55:00"
    }, 
    {
        "category": [
            "food", 
            "snack"
        ], 
        "begin": "2014-12-04T21:55:00", 
        "end": "2014-12-04T22:08:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-04T22:08:00", 
        "end": "2014-12-04T22:21:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-12-04T22:21:00", 
        "end": "2014-12-04T23:00:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-04T23:00:00", 
        "end": "2014-12-04T23:11:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-04T23:11:00", 
        "end": "2014-12-04T23:24:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-04T23:24:00", 
        "end": "2014-12-04T23:28:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-04T23:28:00", 
        "end": "2014-12-04T23:46:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-04T23:46:00", 
        "end": "2014-12-05T07:54:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-05T07:54:00", 
        "end": "2014-12-05T08:13:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-05T08:13:00", 
        "end": "2014-12-05T08:52:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-05T08:52:00", 
        "end": "2014-12-05T09:11:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-05T09:11:00", 
        "end": "2014-12-05T09:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-05T09:30:00", 
        "end": "2014-12-05T10:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-12-05T10:45:00", 
        "end": "2014-12-05T11:00:00"
    }, 
    {
        "category": [
            "misc", 
            "driving_test"
        ], 
        "begin": "2014-12-05T11:00:00", 
        "end": "2014-12-05T11:15:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-05T11:15:00", 
        "end": "2014-12-05T11:35:00"
    }, 
    {
        "category": [
            "social", 
            "lunch_social"
        ], 
        "begin": "2014-12-05T11:35:00", 
        "end": "2014-12-05T12:25:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-05T12:25:00", 
        "end": "2014-12-05T13:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-05T13:00:00", 
        "end": "2014-12-05T13:21:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-05T13:21:00", 
        "end": "2014-12-05T13:28:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-05T13:28:00", 
        "end": "2014-12-05T15:46:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-05T15:46:00", 
        "end": "2014-12-05T16:05:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-05T16:05:00", 
        "end": "2014-12-05T16:25:00"
    }, 
    {
        "category": [
            "fitness", 
            "rock_climbing"
        ], 
        "begin": "2014-12-05T16:25:00", 
        "end": "2014-12-05T18:25:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-05T18:25:00", 
        "end": "2014-12-05T18:40:00"
    }, 
    {
        "category": [
            "social", 
            "party"
        ], 
        "begin": "2014-12-05T18:40:00", 
        "end": "2014-12-05T21:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-05T21:00:00", 
        "end": "2014-12-05T21:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-05T21:20:00", 
        "end": "2014-12-05T21:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-05T21:30:00", 
        "end": "2014-12-05T21:51:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-05T21:51:00", 
        "end": "2014-12-05T22:13:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-12-05T22:13:00", 
        "end": "2014-12-05T22:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-05T22:55:00", 
        "end": "2014-12-05T23:10:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-05T23:10:00", 
        "end": "2014-12-05T23:25:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-05T23:25:00", 
        "end": "2014-12-05T23:31:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-05T23:31:00", 
        "end": "2014-12-06T09:13:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-12-06T09:13:00", 
        "end": "2014-12-06T09:24:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-06T09:24:00", 
        "end": "2014-12-06T09:35:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-12-06T09:35:00", 
        "end": "2014-12-06T09:59:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-06T09:59:00", 
        "end": "2014-12-06T10:13:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-06T10:13:00", 
        "end": "2014-12-06T10:30:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-06T10:30:00", 
        "end": "2014-12-06T10:53:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-06T10:53:00", 
        "end": "2014-12-06T11:01:00"
    }, 
    {
        "category": [
            "social", 
            "skype_parents"
        ], 
        "begin": "2014-12-06T11:01:00", 
        "end": "2014-12-06T11:12:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-06T11:12:00", 
        "end": "2014-12-06T11:19:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-06T11:19:00", 
        "end": "2014-12-06T11:39:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-12-06T11:39:00", 
        "end": "2014-12-06T12:58:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-12-06T12:58:00", 
        "end": "2014-12-06T13:17:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-06T13:17:00", 
        "end": "2014-12-06T13:28:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-06T13:28:00", 
        "end": "2014-12-06T13:38:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-06T13:38:00", 
        "end": "2014-12-06T16:07:00"
    }, 
    {
        "category": [
            "social", 
            "friend_hangout"
        ], 
        "begin": "2014-12-06T16:07:00", 
        "end": "2014-12-06T16:29:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-06T16:29:00", 
        "end": "2014-12-06T17:23:00"
    }, 
    {
        "category": [
            "work", 
            "colleague_meeting"
        ], 
        "begin": "2014-12-06T17:23:00", 
        "end": "2014-12-06T17:50:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-06T17:50:00", 
        "end": "2014-12-06T18:51:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-06T18:51:00", 
        "end": "2014-12-06T19:00:00"
    }, 
    {
        "category": [
            "social", 
            "dinner_social"
        ], 
        "begin": "2014-12-06T19:00:00", 
        "end": "2014-12-06T20:05:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-06T20:05:00", 
        "end": "2014-12-06T20:09:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-06T20:09:00", 
        "end": "2014-12-06T23:27:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-06T23:27:00", 
        "end": "2014-12-06T23:45:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-06T23:45:00", 
        "end": "2014-12-06T23:51:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-06T23:51:00", 
        "end": "2014-12-07T00:00:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-07T00:00:00", 
        "end": "2014-12-07T08:50:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-12-07T08:50:00", 
        "end": "2014-12-07T09:05:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-07T09:05:00", 
        "end": "2014-12-07T09:22:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-07T09:22:00", 
        "end": "2014-12-07T09:43:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-07T09:43:00", 
        "end": "2014-12-07T10:04:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-07T10:04:00", 
        "end": "2014-12-07T10:20:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-07T10:20:00", 
        "end": "2014-12-07T12:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-07T12:20:00", 
        "end": "2014-12-07T13:08:00"
    }, 
    {
        "category": [
            "social", 
            "lunch_social"
        ], 
        "begin": "2014-12-07T13:08:00", 
        "end": "2014-12-07T15:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-07T15:10:00", 
        "end": "2014-12-07T15:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-12-07T15:20:00", 
        "end": "2014-12-07T17:00:00"
    }, 
    {
        "category": [
            "social", 
            "meetup"
        ], 
        "begin": "2014-12-07T17:00:00", 
        "end": "2014-12-07T17:32:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-07T17:32:00", 
        "end": "2014-12-07T18:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-07T18:30:00", 
        "end": "2014-12-07T18:40:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-07T18:40:00", 
        "end": "2014-12-07T19:53:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-12-07T19:53:00", 
        "end": "2014-12-07T20:34:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-12-07T20:34:00", 
        "end": "2014-12-07T21:08:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-07T21:08:00", 
        "end": "2014-12-07T22:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-07T22:00:00", 
        "end": "2014-12-07T23:11:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-07T23:11:00", 
        "end": "2014-12-07T23:34:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-07T23:34:00", 
        "end": "2014-12-07T23:48:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-07T23:48:00", 
        "end": "2014-12-07T23:54:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-07T23:54:00", 
        "end": "2014-12-08T07:53:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-08T07:53:00", 
        "end": "2014-12-08T08:15:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-08T08:15:00", 
        "end": "2014-12-08T08:29:00"
    }, 
    {
        "category": [
            "fitness", 
            "exercise_routine"
        ], 
        "begin": "2014-12-08T08:29:00", 
        "end": "2014-12-08T08:51:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-08T08:51:00", 
        "end": "2014-12-08T09:05:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-08T09:05:00", 
        "end": "2014-12-08T09:24:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-08T09:24:00", 
        "end": "2014-12-08T09:47:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-08T09:47:00", 
        "end": "2014-12-08T11:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "bureaucracy"
        ], 
        "begin": "2014-12-08T11:00:00", 
        "end": "2014-12-08T11:47:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_out_by_myself"
        ], 
        "begin": "2014-12-08T11:47:00", 
        "end": "2014-12-08T12:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "bureaucracy"
        ], 
        "begin": "2014-12-08T12:20:00", 
        "end": "2014-12-08T12:41:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-12-08T12:41:00", 
        "end": "2014-12-08T13:05:00"
    }, 
    {
        "category": [
            "social", 
            "friend_hangout"
        ], 
        "begin": "2014-12-08T13:05:00", 
        "end": "2014-12-08T13:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-08T13:45:00", 
        "end": "2014-12-08T13:49:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-08T13:49:00", 
        "end": "2014-12-08T20:06:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-08T20:06:00", 
        "end": "2014-12-08T20:16:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-08T20:16:00", 
        "end": "2014-12-08T20:22:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_with_prep"
        ], 
        "begin": "2014-12-08T20:22:00", 
        "end": "2014-12-08T21:22:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-08T21:22:00", 
        "end": "2014-12-08T21:24:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-08T21:24:00", 
        "end": "2014-12-08T21:48:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-08T21:48:00", 
        "end": "2014-12-08T22:33:00"
    }, 
    {
        "category": [
            "overhead", 
            "laundry"
        ], 
        "begin": "2014-12-08T22:33:00", 
        "end": "2014-12-08T22:43:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-08T22:43:00", 
        "end": "2014-12-08T23:09:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-08T23:09:00", 
        "end": "2014-12-08T23:13:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-08T23:13:00", 
        "end": "2014-12-08T23:26:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-08T23:26:00", 
        "end": "2014-12-08T23:42:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-08T23:42:00", 
        "end": "2014-12-09T04:04:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-09T04:04:00", 
        "end": "2014-12-09T04:29:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-09T04:29:00", 
        "end": "2014-12-09T04:37:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-09T04:37:00", 
        "end": "2014-12-09T09:32:00"
    }, 
    {
        "category": [
            "overhead", 
            "bureaucracy"
        ], 
        "begin": "2014-12-09T09:32:00", 
        "end": "2014-12-09T10:29:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-09T10:29:00", 
        "end": "2014-12-09T12:25:00"
    }, 
    {
        "category": [
            "social", 
            "lunch_social"
        ], 
        "begin": "2014-12-09T12:25:00", 
        "end": "2014-12-09T14:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-09T14:00:00", 
        "end": "2014-12-09T14:30:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-12-09T14:30:00", 
        "end": "2014-12-09T17:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-09T17:30:00", 
        "end": "2014-12-09T22:30:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_out_by_myself"
        ], 
        "begin": "2014-12-09T22:30:00", 
        "end": "2014-12-09T23:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-09T23:00:00", 
        "end": "2014-12-09T23:10:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-09T23:10:00", 
        "end": "2014-12-09T23:23:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-09T23:23:00", 
        "end": "2014-12-09T23:37:00"
    }, 
    {
        "category": [
            "untracked"
        ], 
        "begin": "2014-12-09T23:37:00", 
        "end": "2014-12-11T23:59:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-11T23:59:00", 
        "end": "2014-12-12T10:27:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-12T10:27:00", 
        "end": "2014-12-12T10:37:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-12T10:37:00", 
        "end": "2014-12-12T10:54:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-12T10:54:00", 
        "end": "2014-12-12T11:07:00"
    }, 
    {
        "category": [
            "social", 
            "skype_parents"
        ], 
        "begin": "2014-12-12T11:07:00", 
        "end": "2014-12-12T11:46:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-12T11:46:00", 
        "end": "2014-12-12T11:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "bureaucracy"
        ], 
        "begin": "2014-12-12T11:55:00", 
        "end": "2014-12-12T12:00:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-12T12:00:00", 
        "end": "2014-12-12T13:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-12-12T13:00:00", 
        "end": "2014-12-12T13:35:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-12T13:35:00", 
        "end": "2014-12-12T14:30:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-12-12T14:30:00", 
        "end": "2014-12-12T15:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-12T15:20:00", 
        "end": "2014-12-12T15:33:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-12T15:33:00", 
        "end": "2014-12-12T16:30:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-12-12T16:30:00", 
        "end": "2014-12-12T17:45:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-12T17:45:00", 
        "end": "2014-12-12T19:12:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-12T19:12:00", 
        "end": "2014-12-12T19:17:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-12-12T19:17:00", 
        "end": "2014-12-12T19:35:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-12T19:35:00", 
        "end": "2014-12-12T20:10:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-12T20:10:00", 
        "end": "2014-12-12T20:14:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-12-12T20:14:00", 
        "end": "2014-12-12T20:24:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-12T20:24:00", 
        "end": "2014-12-12T23:31:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-12T23:31:00", 
        "end": "2014-12-12T23:58:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-12T23:58:00", 
        "end": "2014-12-13T09:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-13T09:30:00", 
        "end": "2014-12-13T10:12:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-13T10:12:00", 
        "end": "2014-12-13T10:23:00"
    }, 
    {
        "category": [
            "overhead", 
            "facebook"
        ], 
        "begin": "2014-12-13T10:23:00", 
        "end": "2014-12-13T10:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-13T10:30:00", 
        "end": "2014-12-13T10:41:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-13T10:41:00", 
        "end": "2014-12-13T11:07:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-13T11:07:00", 
        "end": "2014-12-13T11:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-13T11:30:00", 
        "end": "2014-12-13T12:04:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-13T12:04:00", 
        "end": "2014-12-13T12:18:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-12-13T12:18:00", 
        "end": "2014-12-13T13:05:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-13T13:05:00", 
        "end": "2014-12-13T13:09:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-13T13:09:00", 
        "end": "2014-12-13T13:39:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-13T13:39:00", 
        "end": "2014-12-13T15:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-13T15:30:00", 
        "end": "2014-12-13T15:58:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-12-13T15:58:00", 
        "end": "2014-12-13T16:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-13T16:20:00", 
        "end": "2014-12-13T16:25:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-13T16:25:00", 
        "end": "2014-12-13T16:42:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-13T16:42:00", 
        "end": "2014-12-13T16:49:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-13T16:49:00", 
        "end": "2014-12-13T17:33:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-13T17:33:00", 
        "end": "2014-12-13T17:52:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-13T17:52:00", 
        "end": "2014-12-13T19:05:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-13T19:05:00", 
        "end": "2014-12-13T20:10:00"
    }, 
    {
        "category": [
            "social", 
            "dinner_social"
        ], 
        "begin": "2014-12-13T20:10:00", 
        "end": "2014-12-13T21:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-13T21:40:00", 
        "end": "2014-12-13T21:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-12-13T21:55:00", 
        "end": "2014-12-13T22:15:00"
    }, 
    {
        "category": [
            "social", 
            "friend_hangout"
        ], 
        "begin": "2014-12-13T22:15:00", 
        "end": "2014-12-13T23:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-13T23:30:00", 
        "end": "2014-12-14T00:15:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-14T00:15:00", 
        "end": "2014-12-14T00:29:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-14T00:29:00", 
        "end": "2014-12-14T00:44:00"
    }, 
    {
        "category": [
            "food", 
            "snack"
        ], 
        "begin": "2014-12-14T00:44:00", 
        "end": "2014-12-14T00:52:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-14T00:52:00", 
        "end": "2014-12-14T09:53:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-14T09:53:00", 
        "end": "2014-12-14T10:17:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-14T10:17:00", 
        "end": "2014-12-14T11:23:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-14T11:23:00", 
        "end": "2014-12-14T11:47:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-14T11:47:00", 
        "end": "2014-12-14T11:52:00"
    }, 
    {
        "category": [
            "social", 
            "skype_parents"
        ], 
        "begin": "2014-12-14T11:52:00", 
        "end": "2014-12-14T12:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-14T12:10:00", 
        "end": "2014-12-14T12:31:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-14T12:31:00", 
        "end": "2014-12-14T13:38:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-14T13:38:00", 
        "end": "2014-12-14T13:44:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-12-14T13:44:00", 
        "end": "2014-12-14T14:29:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-12-14T14:29:00", 
        "end": "2014-12-14T14:57:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-14T14:57:00", 
        "end": "2014-12-14T15:33:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-12-14T15:33:00", 
        "end": "2014-12-14T16:14:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-14T16:14:00", 
        "end": "2014-12-14T16:21:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-12-14T16:21:00", 
        "end": "2014-12-14T19:17:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-12-14T19:17:00", 
        "end": "2014-12-14T20:08:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-14T20:08:00", 
        "end": "2014-12-14T20:16:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-14T20:16:00", 
        "end": "2014-12-14T20:58:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-14T20:58:00", 
        "end": "2014-12-14T21:04:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-14T21:04:00", 
        "end": "2014-12-14T21:23:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-14T21:23:00", 
        "end": "2014-12-15T10:15:00"
    }, 
    {
        "category": [
            "overhead", 
            "reading_online"
        ], 
        "begin": "2014-12-15T10:15:00", 
        "end": "2014-12-15T12:38:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-15T12:38:00", 
        "end": "2014-12-15T12:48:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_with_prep"
        ], 
        "begin": "2014-12-15T12:48:00", 
        "end": "2014-12-15T13:48:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-15T13:48:00", 
        "end": "2014-12-15T20:06:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_with_prep"
        ], 
        "begin": "2014-12-15T20:06:00", 
        "end": "2014-12-15T20:53:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-15T20:53:00", 
        "end": "2014-12-15T21:04:00"
    }, 
    {
        "category": [
            "leisure", 
            "shopping"
        ], 
        "begin": "2014-12-15T21:04:00", 
        "end": "2014-12-15T22:29:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-15T22:29:00", 
        "end": "2014-12-15T22:35:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-15T22:35:00", 
        "end": "2014-12-15T23:55:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-15T23:55:00", 
        "end": "2014-12-16T00:10:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-16T00:10:00", 
        "end": "2014-12-16T08:27:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-12-16T08:27:00", 
        "end": "2014-12-16T09:35:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-16T09:35:00", 
        "end": "2014-12-16T10:21:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast_with_prep"
        ], 
        "begin": "2014-12-16T10:21:00", 
        "end": "2014-12-16T11:09:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-16T11:09:00", 
        "end": "2014-12-16T11:47:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-16T11:47:00", 
        "end": "2014-12-16T11:56:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-16T11:56:00", 
        "end": "2014-12-16T12:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-16T12:10:00", 
        "end": "2014-12-16T12:22:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-16T12:22:00", 
        "end": "2014-12-16T12:37:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_out_by_myself"
        ], 
        "begin": "2014-12-16T12:37:00", 
        "end": "2014-12-16T12:51:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-16T12:51:00", 
        "end": "2014-12-16T13:40:00"
    }, 
    {
        "category": [
            "work", 
            "colleague_meeting"
        ], 
        "begin": "2014-12-16T13:40:00", 
        "end": "2014-12-16T15:32:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-16T15:32:00", 
        "end": "2014-12-16T17:05:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-16T17:05:00", 
        "end": "2014-12-16T18:19:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_out_by_myself"
        ], 
        "begin": "2014-12-16T18:19:00", 
        "end": "2014-12-16T19:20:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-16T19:20:00", 
        "end": "2014-12-16T19:45:00"
    }, 
    {
        "category": [
            "social", 
            "party"
        ], 
        "begin": "2014-12-16T19:45:00", 
        "end": "2014-12-16T22:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-16T22:40:00", 
        "end": "2014-12-16T23:06:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-16T23:06:00", 
        "end": "2014-12-16T23:15:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-16T23:15:00", 
        "end": "2014-12-16T23:26:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-16T23:26:00", 
        "end": "2014-12-16T23:36:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-16T23:36:00", 
        "end": "2014-12-17T08:00:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-12-17T08:00:00", 
        "end": "2014-12-17T08:19:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-17T08:19:00", 
        "end": "2014-12-17T08:37:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-17T08:37:00", 
        "end": "2014-12-17T08:40:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-17T08:40:00", 
        "end": "2014-12-17T08:55:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-17T08:55:00", 
        "end": "2014-12-17T09:12:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-17T09:12:00", 
        "end": "2014-12-17T09:31:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-17T09:31:00", 
        "end": "2014-12-17T13:20:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_out_by_myself"
        ], 
        "begin": "2014-12-17T13:20:00", 
        "end": "2014-12-17T13:55:00"
    }, 
    {
        "category": [
            "work", 
            "research", 
            "research"
        ], 
        "begin": "2014-12-17T13:55:00", 
        "end": "2014-12-17T18:51:00"
    }, 
    {
        "category": [
            "social", 
            "dinner_social"
        ], 
        "begin": "2014-12-17T18:51:00", 
        "end": "2014-12-17T20:05:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-17T20:05:00", 
        "end": "2014-12-17T20:18:00"
    }, 
    {
        "category": [
            "overhead", 
            "bureaucracy"
        ], 
        "begin": "2014-12-17T20:18:00", 
        "end": "2014-12-17T20:40:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_fiction"
        ], 
        "begin": "2014-12-17T20:40:00", 
        "end": "2014-12-17T23:35:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-17T23:35:00", 
        "end": "2014-12-17T23:47:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-17T23:47:00", 
        "end": "2014-12-18T00:02:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-18T00:02:00", 
        "end": "2014-12-18T08:42:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-12-18T08:42:00", 
        "end": "2014-12-18T08:56:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-18T08:56:00", 
        "end": "2014-12-18T09:14:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-18T09:14:00", 
        "end": "2014-12-18T09:27:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-18T09:27:00", 
        "end": "2014-12-18T09:49:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-18T09:49:00", 
        "end": "2014-12-18T10:05:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-18T10:05:00", 
        "end": "2014-12-18T10:48:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-12-18T10:48:00", 
        "end": "2014-12-18T11:42:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-18T11:42:00", 
        "end": "2014-12-18T11:58:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-18T11:58:00", 
        "end": "2014-12-18T13:01:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-12-18T13:01:00", 
        "end": "2014-12-18T13:34:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-18T13:34:00", 
        "end": "2014-12-18T13:48:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-18T13:48:00", 
        "end": "2014-12-18T16:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-18T16:10:00", 
        "end": "2014-12-18T16:25:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-18T16:25:00", 
        "end": "2014-12-18T19:05:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-18T19:05:00", 
        "end": "2014-12-18T19:15:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_out_by_myself"
        ], 
        "begin": "2014-12-18T19:15:00", 
        "end": "2014-12-18T19:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-18T19:40:00", 
        "end": "2014-12-18T19:50:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-18T19:50:00", 
        "end": "2014-12-18T20:01:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-18T20:01:00", 
        "end": "2014-12-18T23:24:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-18T23:24:00", 
        "end": "2014-12-18T23:42:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-18T23:42:00", 
        "end": "2014-12-18T23:58:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-18T23:58:00", 
        "end": "2014-12-19T08:30:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-12-19T08:30:00", 
        "end": "2014-12-19T08:47:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-19T08:47:00", 
        "end": "2014-12-19T08:58:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-19T08:58:00", 
        "end": "2014-12-19T09:15:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-19T09:15:00", 
        "end": "2014-12-19T09:39:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-19T09:39:00", 
        "end": "2014-12-19T10:12:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-19T10:12:00", 
        "end": "2014-12-19T10:28:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-19T10:28:00", 
        "end": "2014-12-19T12:37:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-12-19T12:37:00", 
        "end": "2014-12-19T12:56:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-19T12:56:00", 
        "end": "2014-12-19T17:49:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-19T17:49:00", 
        "end": "2014-12-19T18:00:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_out_by_myself"
        ], 
        "begin": "2014-12-19T18:00:00", 
        "end": "2014-12-19T18:37:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-19T18:37:00", 
        "end": "2014-12-19T18:47:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-19T18:47:00", 
        "end": "2014-12-19T18:59:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-19T18:59:00", 
        "end": "2014-12-19T19:13:00"
    }, 
    {
        "category": [
            "work", 
            "colleague_meeting"
        ], 
        "begin": "2014-12-19T19:13:00", 
        "end": "2014-12-19T19:53:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-19T19:53:00", 
        "end": "2014-12-19T20:00:00"
    }, 
    {
        "category": [
            "social", 
            "friend_hangout"
        ], 
        "begin": "2014-12-19T20:00:00", 
        "end": "2014-12-19T23:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-19T23:00:00", 
        "end": "2014-12-19T23:10:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-19T23:10:00", 
        "end": "2014-12-19T23:22:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-19T23:22:00", 
        "end": "2014-12-19T23:40:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-19T23:40:00", 
        "end": "2014-12-19T23:44:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-19T23:44:00", 
        "end": "2014-12-19T23:50:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-19T23:50:00", 
        "end": "2014-12-20T09:18:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-12-20T09:18:00", 
        "end": "2014-12-20T09:26:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-20T09:26:00", 
        "end": "2014-12-20T09:44:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-20T09:44:00", 
        "end": "2014-12-20T09:59:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-20T09:59:00", 
        "end": "2014-12-20T10:06:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-20T10:06:00", 
        "end": "2014-12-20T10:32:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-20T10:32:00", 
        "end": "2014-12-20T10:45:00"
    }, 
    {
        "category": [
            "social", 
            "skype_parents"
        ], 
        "begin": "2014-12-20T10:45:00", 
        "end": "2014-12-20T11:22:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-20T11:22:00", 
        "end": "2014-12-20T12:27:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-20T12:27:00", 
        "end": "2014-12-20T13:01:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-20T13:01:00", 
        "end": "2014-12-20T13:11:00"
    }, 
    {
        "category": [
            "leisure", 
            "shopping"
        ], 
        "begin": "2014-12-20T13:11:00", 
        "end": "2014-12-20T13:25:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-20T13:25:00", 
        "end": "2014-12-20T13:40:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-20T13:40:00", 
        "end": "2014-12-20T14:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "waiting"
        ], 
        "begin": "2014-12-20T14:00:00", 
        "end": "2014-12-20T14:12:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-20T14:12:00", 
        "end": "2014-12-20T14:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-20T14:30:00", 
        "end": "2014-12-20T14:35:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-12-20T14:35:00", 
        "end": "2014-12-20T14:50:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-20T14:50:00", 
        "end": "2014-12-20T15:00:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-20T15:00:00", 
        "end": "2014-12-20T16:12:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-20T16:12:00", 
        "end": "2014-12-20T16:19:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-12-20T16:19:00", 
        "end": "2014-12-20T17:11:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-20T17:11:00", 
        "end": "2014-12-20T19:13:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-20T19:13:00", 
        "end": "2014-12-20T19:19:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_at_home"
        ], 
        "begin": "2014-12-20T19:19:00", 
        "end": "2014-12-20T20:20:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-20T20:20:00", 
        "end": "2014-12-20T21:55:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-20T21:55:00", 
        "end": "2014-12-20T23:08:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-20T23:08:00", 
        "end": "2014-12-20T23:25:00"
    }, 
    {
        "category": [
            "fitness", 
            "stretches"
        ], 
        "begin": "2014-12-20T23:25:00", 
        "end": "2014-12-20T23:40:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-20T23:40:00", 
        "end": "2014-12-21T09:00:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-12-21T09:00:00", 
        "end": "2014-12-21T09:08:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-21T09:08:00", 
        "end": "2014-12-21T09:25:00"
    }, 
    {
        "category": [
            "overhead", 
            "emails"
        ], 
        "begin": "2014-12-21T09:25:00", 
        "end": "2014-12-21T09:31:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-21T09:31:00", 
        "end": "2014-12-21T10:32:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-21T10:32:00", 
        "end": "2014-12-21T10:50:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-21T10:50:00", 
        "end": "2014-12-21T12:00:00"
    }, 
    {
        "category": [
            "leisure", 
            "reading", 
            "reading_nonfiction"
        ], 
        "begin": "2014-12-21T12:00:00", 
        "end": "2014-12-21T12:38:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-21T12:38:00", 
        "end": "2014-12-21T14:49:00"
    }, 
    {
        "category": [
            "food", 
            "lunch_at_home"
        ], 
        "begin": "2014-12-21T14:49:00", 
        "end": "2014-12-21T15:32:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-21T15:32:00", 
        "end": "2014-12-21T15:42:00"
    }, 
    {
        "category": [
            "social", 
            "friend_hangout"
        ], 
        "begin": "2014-12-21T15:42:00", 
        "end": "2014-12-21T15:59:00"
    }, 
    {
        "category": [
            "food", 
            "grocery_trip"
        ], 
        "begin": "2014-12-21T15:59:00", 
        "end": "2014-12-21T17:00:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-21T17:00:00", 
        "end": "2014-12-21T18:20:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-21T18:20:00", 
        "end": "2014-12-21T18:30:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-21T18:30:00", 
        "end": "2014-12-21T18:37:00"
    }, 
    {
        "category": [
            "food", 
            "dinner_with_prep"
        ], 
        "begin": "2014-12-21T18:37:00", 
        "end": "2014-12-21T20:25:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-21T20:25:00", 
        "end": "2014-12-21T20:31:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-21T20:31:00", 
        "end": "2014-12-21T20:35:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-21T20:35:00", 
        "end": "2014-12-21T21:36:00"
    }, 
    {
        "category": [
            "maintenance", 
            "laptop_maintenance"
        ], 
        "begin": "2014-12-21T21:36:00", 
        "end": "2014-12-21T22:51:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-12-21T22:51:00", 
        "end": "2014-12-21T23:17:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-21T23:17:00", 
        "end": "2014-12-21T23:27:00"
    }, 
    {
        "category": [
            "maintenance", 
            "evening_routine"
        ], 
        "begin": "2014-12-21T23:27:00", 
        "end": "2014-12-21T23:43:00"
    }, 
    {
        "category": [
            "sleep"
        ], 
        "begin": "2014-12-21T23:43:00", 
        "end": "2014-12-22T08:00:00"
    }, 
    {
        "category": [
            "leisure", 
            "daydream"
        ], 
        "begin": "2014-12-22T08:00:00", 
        "end": "2014-12-22T08:10:00"
    }, 
    {
        "category": [
            "maintenance", 
            "morning_routine"
        ], 
        "begin": "2014-12-22T08:10:00", 
        "end": "2014-12-22T08:57:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-22T08:57:00", 
        "end": "2014-12-22T09:09:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-22T09:09:00", 
        "end": "2014-12-22T09:17:00"
    }, 
    {
        "category": [
            "overhead", 
            "planning"
        ], 
        "begin": "2014-12-22T09:17:00", 
        "end": "2014-12-22T09:47:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-22T09:47:00", 
        "end": "2014-12-22T09:52:00"
    }, 
    {
        "category": [
            "food", 
            "breakfast"
        ], 
        "begin": "2014-12-22T09:52:00", 
        "end": "2014-12-22T10:03:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-22T10:03:00", 
        "end": "2014-12-22T10:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-22T10:10:00", 
        "end": "2014-12-22T11:05:00"
    }, 
    {
        "category": [
            "misc", 
            "driving_practice"
        ], 
        "begin": "2014-12-22T11:05:00", 
        "end": "2014-12-22T11:35:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-22T11:35:00", 
        "end": "2014-12-22T12:00:00"
    }, 
    {
        "category": [
            "social", 
            "lunch_social"
        ], 
        "begin": "2014-12-22T12:00:00", 
        "end": "2014-12-22T13:10:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-22T13:10:00", 
        "end": "2014-12-22T13:19:00"
    }, 
    {
        "category": [
            "maintenance", 
            "laptop_maintenance"
        ], 
        "begin": "2014-12-22T13:19:00", 
        "end": "2014-12-22T13:26:00"
    }, 
    {
        "category": [
            "overhead", 
            "overhead"
        ], 
        "begin": "2014-12-22T13:26:00", 
        "end": "2014-12-22T13:56:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-22T13:56:00", 
        "end": "2014-12-22T14:34:00"
    }, 
    {
        "category": [
            "maintenance", 
            "introspection"
        ], 
        "begin": "2014-12-22T14:34:00", 
        "end": "2014-12-22T14:51:00"
    }, 
    {
        "category": [
            "work", 
            "side_projects"
        ], 
        "begin": "2014-12-22T14:51:00", 
        "end": "2014-12-22T17:43:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-12-22T17:43:00", 
        "end": "2014-12-22T18:49:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-22T18:49:00", 
        "end": "2014-12-22T19:00:00"
    }, 
    {
        "category": [
            "food", 
            "snack"
        ], 
        "begin": "2014-12-22T19:00:00", 
        "end": "2014-12-22T19:25:00"
    }, 
    {
        "category": [
            "social", 
            "movie_social"
        ], 
        "begin": "2014-12-22T19:25:00", 
        "end": "2014-12-22T22:00:00"
    }, 
    {
        "category": [
            "overhead", 
            "transit"
        ], 
        "begin": "2014-12-22T22:00:00", 
        "end": "2014-12-22T22:10:00"
    }, 
    {
        "category": [
            "food", 
            "snack"
        ], 
        "begin": "2014-12-22T22:10:00", 
        "end": "2014-12-22T22:21:00"
    }, 
    {
        "category": [
            "leisure", 
            "writing"
        ], 
        "begin": "2014-12-22T22:21:00", 
        "end": "2014-12-22T23:55:00"
    }
];
