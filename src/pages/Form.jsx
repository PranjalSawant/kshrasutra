import React, { useState } from 'react'
import Questions from '../components/Questions';
import { Button } from '../components/Button';

export const Form = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (questionId, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [questionId]: value,
    }));
  };

  const handleBlur = (questionId) => {
    // Perform validation and update errors state
    // For simplicity, I'll assume no validation here
    setErrors((prevErrors) => ({
      ...prevErrors,
      [questionId]: null, // Reset errors for now
    }));
  };
  const questions = [
    {
      id: 'q1',
      text: 'What is your name?',
      type: 'text',
    },
    {
      id: 'q2',
      text: 'What is your age?',
      type: 'text',
    },
    {
      id: 'q3',
      text: 'Select your gender:',
      type: 'radio',
      options: ['Male', 'Female', 'Other'],
    },
    {
      id: 'q4',
      text: 'Are you working?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q5',
      text: 'What is your work shift?',
      type: 'radio',
      options: ['Day Shift', 'Night Shift', 'Day and Night', 'None'],
    },
    {
      id: 'q6',
      text: 'What is the nature of your job',
      type: 'radio',
      options: ['Sitting', 'Standing', 'Combined', 'Travelling' , 'All'],
    },
    {
      id: 'q7',
      text: 'Do you lift heavy weights?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q8',
      text: 'Do you use Laptop / PC / Mobile often?',
      type: 'radio',
      options: ['Yes', 'No', 'Not so often'],
    },
    {
      id: 'q9',
      text: 'How many hours do you spend sitting in a day?',
      type: 'radio',
      options: ['Less than 4hrs', '4 - 6 hrs', '6 - 8 hrs', '8 - 10 hrs', 'More than 10 hrs'],
    },
    {
      id: 'q10',
      text: 'How often do you consume fast food / junk food?',
      type: 'radio',
      options: ['Daily', 'Once a week', 'Twice a week','Thrice a week', 'Rarely'],
    },
    {
      id: 'q11',
      text: 'Do you consume oily/spicy food?',
      type: 'radio',
      options: ['Yes', 'No', 'Rarely'],
    },
    {
      id: 'q12',
      text: 'At what time do you have your dinner?',
      type: 'radio',
      options: ['Before 7pm', 'Between 7 to 9 pm', 'Between 9 to 10 pm', 'After 10pm'],
    },
    {
      id: 'q13',
      text: 'Do you face any digestion-related problems like constipation(hard stools)?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q14',
      text: 'How often do you pass stools in a day?',
      type: 'radio',
      options: ['Once a day', 'Twice a day', '3 to 4 times a day', 'Completely stopped'],
    },
    {
      id: 'q15',
      text: 'When does it pain in the buttock/anal region?',
      type: 'radio',
      options: ['While passing stools', 'Throughout the day', 'No pain'],
    },
    {
      id: 'q16',
      text: 'Do you experience cutting pain at the anal region during passing stools?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q17',
      text: 'Do you experience burning sensation at the anal region while passing stools or after defecation?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q18',
      text: 'Do you experience itching at the anal region during passing stools or after defecation?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q19',
      text: 'While passing stools, is the pile mass coming out?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q20',
      text: 'What is the condition of the pile mass?',
      type: 'radio',
      options: ['Always lying outside', 'Goes inside after a while'],
    },
    {
      id: 'q21',
      text: 'While passing stools, is there any bleeding issue?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q22',
      text: 'How is the bleeding?',
      type: 'radio',
      options: ['In the form of drops', 'Continous Flow', 'Sticking with the stool'],
    },
    {
      id: 'q23',
      text: 'What is the amount of bleeding approximately?',
      type: 'radio',
      options: ['Less than 1 spoon', 'More than 1 spoon'],
    },
    {
      id: 'q24',
      text: 'What is the color of the blood coming from the anus?',
      type: 'radio',
      options: ['Red', 'Brown'],
    },
    {
      id: 'q25',
      text: 'Is there any pus(sticky white color) discharge while passing the stools/ from the anus ?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q26',
      text: 'Do you have boils around the anus region ?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q27',
      text: 'Have you noticed any swelling in the anus region ?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q28',
      text: 'Is this the first time the swelling has occurred or has it occured earlier ?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q29',
      text: 'What kind of body hair do you have?',
      type: 'radio',
      options: ['Scanty hair', 'Moderate hair', 'Stiff & Thick hair'],
    },
    {
      id: 'q30',
      text: 'Do you have diabetes?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q31',
      text: 'Is there any redness or swelling in the buttock area and pain around the anus?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q32',
      text: 'Have you undergone treatment for PiloNidal Sinus?',
      type: 'radio',
      options: ['Allopathic', 'Homoeopathic', 'Ayurvedic','No'],
    },
    {
      id: 'q33',
      text: 'What was the type of treatment?',
      type: 'radio',
      options: ['Surgical Treatment', 'Medicinal Treatment', 'Both' , 'None'],
    },
    {
      id: 'q34',
      text: 'What is the color of the blood coming out of the ?',
      type: 'radio',
      options: ['Yes', 'No', 'Rarely'],
    },
    {
      id: 'q35',
      text: 'Is there any recurrence of PiloNidal Sinus/Fistula after treatment?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q36',
      text: 'How many times does relapse occur in this disease?',
      type: 'radio',
      options: ['Once', 'Twice', 'Thrice','More than three times','None'],
    },
    {
      id: 'q37',
      text: 'Are you suffering from while sitting ?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q38',
      text: 'Is there pain while defecation ?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q39',
      text: 'Do you feel that you are losing weight ?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q40',
      text: 'Just delivered a baby?',
      type: 'radio',
      options: ['Yes', 'No', 'Pregnant right now'],
    },
    {
      id: 'q41',
      text: 'Does anyone in your family have anal cancer, especially from the maternal side?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q42',
      text: 'Are you visiting to the doctor first time?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'q43',
      text: 'You are diagnosed with which of the following disease/s?',
      type: 'checkbox',
      options: ['Piles', 'Pilonidal Sinus', 'Fissure', 'Fistula'],
    },
  ];
  const handleSubmit = () => {
    // Submit form data, handle validation, etc.
  };
  return (
    <div className="p-5 bg-ivory">
      <div className="py-5"></div>
      <form onSubmit={handleSubmit} className='container'>
    {questions.map((question) => (
      <Questions
        key={question.id}
        {...question}
        value={formData[question.id] || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors[question.id]}
      />
    ))}
    <Button type="submit"  btnText="Submit" bgColor="btn-success"></Button>
  </form>
    </div>
  )
}
