const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to our legal website!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// Example of handling a POST request to submit a legal form
app.post('/submit-form', (req, res) => {
    // Handle form submission logic here
    res.send('Form submitted successfully!');
  });
// Example of middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} request received at ${req.url}`);
    next();
  });
// Example of using EJS as the template engine
app.set('view engine', 'ejs');

app.get('/legal-topic', (req, res) => {
  const legalTopic = 'Family Law';
  const subtopics = ['Divorce', 'Child Custody', 'Adoption'];
  res.render('legal-topic', { legalTopic, subtopics });
});
// Example of connecting to a MongoDB database using Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/legal-website', { useNewUrlParser: true, useUnifiedTopology: true });

const legalTopicSchema = new mongoose.Schema({
  title: String,
  content: String
});

const LegalTopic = mongoose.model('LegalTopic', legalTopicSchema);

// Example of fetching legal topics from the database
app.get('/legal-topics', async (req, res) => {
  try {
    const topics = await LegalTopic.find();
    res.json(topics);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
    