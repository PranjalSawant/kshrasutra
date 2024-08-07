import React, { useState } from 'react'
import Questions from '../components/Questions';
import { Button } from '../components/Button';
import { Title } from '../components/Title';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// const questions = [
//   {
//     id: 'q1',
//     text: 'What is your name?',
//     type: 'text',
//   },
//   {
//     id: 'q2',
//     text: 'What is your age?',
//     type: 'text',
//   },
//   {
//     id: 'q3',
//     text: 'Select your gender:',
//     type: 'radio',
//     options: ['Male', 'Female'],
//   },
//   {
//     id: 'q4',
//     text: 'What is your weight?',
//     type: 'radio',
//     options: ['60 - 70 kg', '70 - 80 kg', '80 - 90 kg', 'above 90 kg','below 60 kg'],
//   },
//   {
//     id: 'q5',
//     text: 'Are you working?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q6',
//     text: 'What is your work shift?',
//     type: 'radio',
//     options: ['Day Shift', 'Night Shift', 'Day and Night', 'None'],
//   },
//   {
//     id: 'q7',
//     text: 'What is the nature of your job',
//     type: 'radio',
//     options: ['Sitting', 'Standing', 'Combined', 'Travelling', 'All'],
//   },
//   {
//     id: 'q8',
//     text: 'Do you lift heavy weights?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q9',
//     text: 'Do you use Laptop / PC / Mobile often?',
//     type: 'radio',
//     options: ['Yes', 'No', 'Not so often'],
//   },
//   {
//     id: 'q10',
//     text: 'How many hours do you spend sitting in a day?',
//     type: 'radio',
//     options: ['4 - 6 hrs', '6 - 8 hrs', '8 - 10 hrs','Less than 4hrs',  'More than 10 hrs'],
//   },
//   {
//     id: 'q11',
//     text: 'How often do you consume fast food / junk food?',
//     type: 'radio',
//     options: ['Daily', 'Once a week', 'Twice a week', 'Thrice a week', 'Rarely'],
//   },
//   {
//     id: 'q12',
//     text: 'Do you consume oily/spicy food?',
//     type: 'radio',
//     options: ['No','Yes'],
//   },
//   {
//     id: 'q13',
//     text: 'At what time do you have your dinner?',
//     type: 'radio',
//     options: ['Before 7pm', 'Between 7 to 9 pm', 'Between 9 to 10 pm', 'After 10pm'],
//   },
//   {
//     id: 'q14',
//     text: 'Do you face any digestion-related problems like constipation(hard stools)?',
//     type: 'radio',
//     options: ['No','Yes'],
//   },
//   {
//     id: 'q15',
//     text: 'How often do you pass stools in a day?',
//     type: 'radio',
//     options: ['Once a day', 'Twice a day', '3 to 4 times a day', 'Completely stopped'],
//   },
//   {
//     id: 'q16',
//     text: 'When does it pain in the buttock/anal region?',
//     type: 'radio',
//     options: ['None', 'Throughout the day', 'While passing stools'],
//   },
//   {
//     id: 'q17',
//     text: 'Do you experience cutting pain at the anal region during passing stools?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q18',
//     text: 'Do you experience burning sensation at the anal region while passing stools or after defecation?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q19',
//     text: 'Do you experience itching at the anal region during passing stools or after defecation?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q20',
//     text: 'While passing stools, is the pile mass coming out?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q21',
//     text: 'What is the condition of the pile mass?',
//     type: 'radio',
//     options: ['Always lying outside', 'Goes inside after a while'],
//   },
//   {
//     id: 'q22',
//     text: 'While passing stools, is there any bleeding issue?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q23',
//     text: 'How is the bleeding?',
//     type: 'radio',
//     options: ['In the form of drops', 'Continuous Flow', 'Sticking with stool', 'None'],
//   },
//   {
//     id: 'q24',
//     text: 'What is the amount of bleeding approximately?',
//     type: 'radio',
//     options: ['Less than 1 spoon', 'More than 1 spoon'],
//   },
//   {
//     id: 'q25',
//     text: 'What is the color of the blood coming from the anus?',
//     type: 'radio',
//     options: ['Red', 'Brown', 'None'],
//   },
//   {
//     id: 'q26',
//     text: 'Is there any pus(sticky white color) discharge while passing the stools/ from the anus ?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q27',
//     text: 'Do you have boils around the anus region ?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q28',
//     text: 'Have you noticed any swelling in the anus region ?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q29',
//     text: 'Is this the first time the swelling has occurred or has it occurred earlier ?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q30',
//     text: 'What kind of body hair do you have?',
//     type: 'radio',
//     options: ['Scanty hair', 'Moderate hair', 'Stiff & Thick hair'],
//   },
//   {
//     id: 'q31',
//     text: 'Do you have diabetes?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q32',
//     text: 'Is there any redness or swelling in the buttock area and pain around the anus?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q33',
//     text: 'Have you undergone treatment for PiloNidal Sinus?',
//     type: 'radio',
//     options: ['Allopathic', 'Homoeopathic', 'Ayurvedic', 'No'],
//   },
//   {
//     id: 'q34',
//     text: 'What was the type of treatment?',
//     type: 'radio',
//     options: ['Surgical Treatment', 'Medicinal Treatment', 'Both', 'None'],
//   },
//   {
//     id: 'q35',
//     text: 'What is the color of the blood coming out of the ?',
//     type: 'radio',
//     options: ['Yes', 'No', 'Rarely'],
//   },
//   {
//     id: 'q36',
//     text: 'Is there any recurrence of PiloNidal Sinus/Fistula after treatment?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q37',
//     text: 'How many times does relapse occur in this disease?',
//     type: 'radio',
//     options: ['Once', 'Twice', 'Thrice', 'More than three times', 'None'],
//   },
//   {
//     id: 'q38',
//     text: 'Are you suffering from while sitting ?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q39',
//     text: 'Is there pain while defecation ?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q40',
//     text: 'Do you feel that you are losing weight ?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q41',
//     text: 'Just delivered a baby?',
//     type: 'radio',
//     options: ['Yes', 'No', 'Pregnant right now'],
//   },
//   {
//     id: 'q42',
//     text: 'Does anyone in your family have anal cancer, especially from the maternal side?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   },
//   {
//     id: 'q43',
//     text: 'Are you visiting to the doctor first time?',
//     type: 'radio',
//     options: ['Yes', 'No'],
//   }
  
//  ];
const questions = [
  { id: 'name', text: 'What is your name?', type: 'text' },
  { id: 'age', text: 'What is your age?', type: 'text' },
  { id: 'gender', text: 'Select your gender:', type: 'radio', options: ['Male', 'Female'] },
  { id: 'weight', text: 'What is your weight?', type: 'radio', options: ['60 - 70 kg', '70 - 80 kg', '80 - 90 kg', 'above 90 kg', 'below 60 kg'] },
  { id: 'working', text: 'Are you working?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'work_shift', text: 'What is your work shift?', type: 'radio', options: ['Day Shift', 'Night Shift', 'Day and Night', 'None'] },
  { id: 'job_nature', text: 'What is the nature of your job', type: 'radio', options: ['Sitting', 'Standing', 'Combined', 'Travelling', 'All'] },
  { id: 'lift_heavy_weights', text: 'Do you lift heavy weights?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'use_devices_often', text: 'Do you use Laptop / PC / Mobile often?', type: 'radio', options: ['Yes', 'No', 'Not so often'] },
  { id: 'sitting_hours', text: 'How many hours do you spend sitting in a day?', type: 'radio', options: ['4 - 6 hrs', '6 - 8 hrs', '8 - 10 hrs', 'Less than 4hrs', 'More than 10 hrs'] },
  { id: 'fast_food_frequency', text: 'How often do you consume fast food / junk food?', type: 'radio', options: ['Daily', 'Once a week', 'Twice a week', 'Thrice a week', 'Rarely'] },
  { id: 'consume_oily_spicy_food', text: 'Do you consume oily/spicy food?', type: 'radio', options: ['No', 'Yes'] },
  { id: 'dinner_time', text: 'At what time do you have your dinner?', type: 'radio', options: ['Before 7pm', 'Between 7 to 9 pm', 'Between 9 to 10 pm', 'After 10pm'] },
  { id: 'digestion_problems', text: 'Do you face any digestion-related problems like constipation(hard stools)?', type: 'radio', options: ['No', 'Yes'] },
  { id: 'stool_frequency', text: 'How often do you pass stools in a day?', type: 'radio', options: ['Once a day', 'Twice a day', '3 to 4 times a day', 'Completely stopped'] },
  { id: 'buttock_pain', text: 'When does it pain in the buttock/anal region?', type: 'radio', options: ['None', 'Throughout the day', 'While passing stools'] },
  { id: 'cutting_pain', text: 'Do you experience cutting pain at the anal region during passing stools?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'burning_sensation', text: 'Do you experience burning sensation at the anal region while passing stools or after defecation?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'itching', text: 'Do you experience itching at the anal region during passing stools or after defecation?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'pile_mass_coming_out', text: 'While passing stools, is the pile mass coming out?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'pile_mass_condition', text: 'What is the condition of the pile mass?', type: 'radio', options: ['Always lying outside', 'Goes inside after a while'] },
  { id: 'bleeding_issue', text: 'While passing stools, is there any bleeding issue?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'bleeding_type', text: 'How is the bleeding?', type: 'radio', options: ['In the form of drops', 'Continuous Flow', 'Sticking with stool', 'None'] },
  { id: 'bleeding_amount', text: 'What is the amount of bleeding approximately?', type: 'radio', options: ['Less than 1 spoon', 'More than 1 spoon'] },
  { id: 'blood_color', text: 'What is the color of the blood coming from the anus?', type: 'radio', options: ['Red', 'Brown', 'None'] },
  { id: 'pus_discharge', text: 'Is there any pus(sticky white color) discharge while passing the stools/ from the anus ?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'boils_around_anus', text: 'Do you have boils around the anus region ?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'anus_swelling', text: 'Have you noticed any swelling in the anus region ?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'first_time_swelling', text: 'Is this the first time the swelling has occurred or has it occurred earlier ?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'body_hair_type', text: 'What kind of body hair do you have?', type: 'radio', options: ['Scanty hair', 'Moderate hair', 'Stiff & Thick hair'] },
  { id: 'diabetes', text: 'Do you have diabetes?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'redness_swelling', text: 'Is there any redness or swelling in the buttock area and pain around the anus?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'treatment_type', text: 'Have you undergone treatment for PiloNidal Sinus?', type: 'radio', options: ['Allopathic', 'Homoeopathic', 'Ayurvedic', 'No'] },
  { id: 'treatment_kind', text: 'What was the type of treatment?', type: 'radio', options: ['Surgical Treatment', 'Medicinal Treatment', 'Both', 'None'] },
  { id: 'blood_color_during_treatment', text: 'What is the color of the blood coming out of the ?', type: 'radio', options: ['Red', 'Brown', 'None'] },
  { id: 'recurrence', text: 'Is there any recurrence of PiloNidal Sinus/Fistula after treatment?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'relapse_frequency', text: 'How many times does relapse occur in this disease?', type: 'radio', options: ['Once', 'Twice', 'Thrice', 'More than three times', 'None'] },
  { id: 'pain_while_sitting', text: 'Are you suffering from while sitting ?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'pain_while_defecation', text: 'Is there pain while defecation ?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'weight_loss', text: 'Do you feel that you are losing weight ?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'just_delivered_baby', text: 'Just delivered a baby?', type: 'radio', options: ['Yes', 'No', 'Pregnant right now'] },
  { id: 'family_anal_cancer', text: 'Does anyone in your family have anal cancer, especially from the maternal side?', type: 'radio', options: ['Yes', 'No'] },
  { id: 'first_time_doctor_visit', text: 'Are you visiting to the doctor first time?', type: 'radio', options: ['Yes', 'No'] },
];
export const Form = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const questionsPerPage = 4;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handleChange = (id, value) => {
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleBlur = (id) => {
    // Validate the field if necessary
  };

  const handleSubmit = async () => {
    try {
      console.log('Submitting form data:', formValues);
  
      // Step 1: Submit the form data to the database
      const submitResponse = await fetch('https://render-clinic-1ahv.onrender.com/api/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
        mode: 'cors', // Ensure CORS is handled
      });
  
      if (!submitResponse.ok) {
        throw new Error('Error submitting form data');
      }
  
      const submitData = await submitResponse.json();
      console.log('Form data submitted successfully:', submitData);
  
      // Step 2: Fetch the results from the prediction endpoint
      const resultResponse = await fetch('https://render-clinic-1ahv.onrender.com/api/predict/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors', // Ensure CORS is handled
      });
  
      if (!resultResponse.ok) {
        throw new Error('Error fetching results');
      }
  
      const resultData = await resultResponse.json();
      console.log('Received results:', resultData);
  
      // Navigate to the results page with the result data
      navigate('/results', { state: { results: resultData } });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  return (
    <div className="bg-ivory">
      <div className='container mt-4 '>
        <div className="py-5"></div>
        <div className="py-3"></div>
        <div className='text-green'>
        <Title title="Start your Wellness Assessment" />
        </div>
        <form>
          {currentQuestions.map((question) => (
            <div className='row' key={question.id}>
              <Questions
                id={question.id}
                text={question.text}
                type={question.type}
                options={question.options}
                value={formValues[question.id] || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors[question.id]}
              />
            </div>
          ))}

          <div className='d-flex py-4'>
            {currentPage > 0 && (
              <button type='button' className='btn btn-outline-success border-success' onClick={handlePrev}>
                Previous
              </button>
            )}
            {currentPage < totalPages - 1 && (
              <button type='button' className='btn btn-success ms-auto' onClick={handleNext}>
                Next
              </button>
            )}
            {currentPage === totalPages - 1 && (
              <button type='button' className='btn btn-success ms-auto' onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
