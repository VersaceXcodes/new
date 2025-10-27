-- Create tables

CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    eco_level INTEGER DEFAULT 0,
    created_at VARCHAR(255) NOT NULL
);

CREATE TABLE user_goals (
    goal_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    milestones JSON,
    completion_status BOOLEAN DEFAULT FALSE,
    last_updated VARCHAR(255),
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(id)
);

CREATE TABLE eco_activities (
    activity_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    activity_name VARCHAR(255) NOT NULL,
    date_logged VARCHAR(255) NOT NULL,
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(id)
);

CREATE TABLE resources (
    resource_id VARCHAR(255) PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    read_count INTEGER DEFAULT 0
);

CREATE TABLE challenges (
    challenge_id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_date VARCHAR(255) NOT NULL,
    end_date VARCHAR(255) NOT NULL
);

CREATE TABLE user_challenges (
    user_challenge_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    challenge_id VARCHAR(255) NOT NULL,
    progress INTEGER DEFAULT 0,
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(id),
    CONSTRAINT fk_challenge
      FOREIGN KEY(challenge_id) 
	  REFERENCES challenges(challenge_id)
);

CREATE TABLE notifications (
    notification_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at VARCHAR(255) NOT NULL,
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(id)
);

CREATE TABLE feedback_and_support (
    feedback_id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    details TEXT NOT NULL,
    screenshot_urls JSON,
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(id)
);

-- Seed data

-- Users
INSERT INTO users (id, email, name, eco_level, created_at) VALUES ('user1', 'user1@example.com', 'Alice Smith', 0, '2023-10-10');
INSERT INTO users (id, email, name, eco_level, created_at) VALUES ('user2', 'user2@example.com', 'Bob Johnson', 0, '2023-10-11');

-- User Goals
INSERT INTO user_goals (goal_id, user_id, title, description, milestones, completion_status, last_updated) 
VALUES ('goal1', 'user1', 'Reduce Plastic Waste', 'Cut down plastic waste by 50% in 6 months', '{"milestones":["milestone1", "milestone2"]}', FALSE, '2023-10-12');

-- Eco Activities
INSERT INTO eco_activities (activity_id, user_id, activity_name, date_logged) 
VALUES ('activity1', 'user1', 'Planted a Tree', '2023-10-13');

-- Resources
INSERT INTO resources (resource_id, category, title, content, read_count) 
VALUES ('resource1', 'Sustainability', 'How to Green Your Lifestyle', 'Content goes here...', 0);

-- Challenges
INSERT INTO challenges (challenge_id, title, description, start_date, end_date) 
VALUES ('challenge1', 'No Carbon Challenge', 'Reduce your carbon footprint by 20%', '2023-11-01', '2023-12-01');

-- User Challenges
INSERT INTO user_challenges (user_challenge_id, user_id, challenge_id, progress) 
VALUES ('userchallenge1', 'user1', 'challenge1', 0);

-- Notifications
INSERT INTO notifications (notification_id, user_id, message, is_read, created_at) 
VALUES ('notif1', 'user1', 'Welcome to our platform!', FALSE, '2023-10-10');

-- Feedback and Support
INSERT INTO feedback_and_support (feedback_id, user_id, subject, details, screenshot_urls) 
VALUES ('feedback1', 'user1', 'App issue', 'Details about the issue', '["https://picsum.photos/200?random=1"]');