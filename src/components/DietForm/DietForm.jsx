import React, { useState } from 'react';
import jsPDF from 'jspdf';
import run from '../../config/gemini';
import { parseHTMLToText } from '../../utils/parseHTMLToText';
import Popup from '../Popup/Popup';

const DietForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
    activityLevel: '',
    goals: '',
    medicalConditions: '',
    allergies: '',
    medications: '',
    dietaryRestrictions: '',
    eatingHabits: '',
    cookingPreferences: '',
    exercisePreferences: '',
    timeConstraints: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
    activityLevel: '',
    exercisePreferences: ''
  });

  const [responseHtml, setResponseHtml] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['name', 'age', 'height', 'weight', 'gender', 'activityLevel', 'exercisePreferences'];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsPopupOpen(true);
      setIsLoading(true);

      try {
        const prompt = `Generate a personalized diet and exercise plan based on the following details:
Name: ${formData.name}
Age: ${formData.age}
Height: ${formData.height} cm
Weight: ${formData.weight} kg
Gender: ${formData.gender}
Activity Level: ${formData.activityLevel}
Goals: ${formData.goals}
Exercise Preferences: ${formData.exercisePreferences}
Medical Conditions: ${formData.medicalConditions}
Allergies or Intolerances: ${formData.allergies}
Medications: ${formData.medications}
Dietary Restrictions: ${formData.dietaryRestrictions}
Eating Habits: ${formData.eatingHabits}
Cooking Preferences: ${formData.cookingPreferences}
Time Constraints: ${formData.timeConstraints}`;

        const response = await run(prompt);

        const formattedResponse = response
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*/g, '<br/>');

        setResponseHtml(formattedResponse);
        setIsLoading(false);

      } catch (error) {
        console.error('Error communicating with AI:', error);
        setIsLoading(false);
      }
    }
  };

  const generatePDF = (htmlContent) => {
    const doc = new jsPDF();
    const text = parseHTMLToText(htmlContent);
    
    const margin = 10;
    const lineHeight = 10;
    const pageWidth = doc.internal.pageSize.width;
    let y = margin;
    
    text.split('\n').forEach((line) => {
      if (y + lineHeight > doc.internal.pageSize.height - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += lineHeight;
    });
    
    doc.save('diet-plan.pdf');
  };

  const handleDownload = () => {
    generatePDF(responseHtml);
  };

  const renderInputField = (field) => {
    if (field.options) {
      return (
        <div className="col-span-1">
          <label className="block text-md mb-1 text-yellow-400">{field.label}</label>
          <select
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full p-2 bg-black text-white border-2 border-yellow-400 rounded-md focus:outline-none focus:border-yellow-500 text-sm"
          >
            {field.options.map((option, index) => (
              <option key={index} value={option === 'Select' ? '' : option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    } else if (field.type === 'textarea') {
      return (
        <div className="col-span-1 md:col-span-2">
          <label className="block text-md mb-1 text-yellow-400">{field.label}</label>
          <textarea
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full p-2 bg-black text-white border-2 border-yellow-400 rounded-md focus:outline-none focus:border-yellow-500 text-sm"
            rows={3}
          />
        </div>
      );
    } else {
      return (
        <div className="col-span-1">
          <label className="block text-md mb-1 text-yellow-400">{field.label}</label>
          <input
            type={field.type || 'text'}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full p-2 bg-black text-white border-2 border-yellow-400 rounded-md focus:outline-none focus:border-yellow-500 text-sm"
          />
        </div>
      );
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-lg bg-black text-white p-6 rounded-lg shadow-lg mt-20">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Personalized Diet and Exercise Plan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{
              label: 'Name: *',
              name: 'name',
              type: 'text'
            }, {
              label: 'Age: *',
              name: 'age',
              type: 'number'
            }, {
              label: 'Height (cm): *',
              name: 'height',
              type: 'number'
            }, {
              label: 'Weight (kg): *',
              name: 'weight',
              type: 'number'
            }].map(field => renderInputField(field))}

            {[{
              label: 'Gender: *',
              name: 'gender',
              options: ['Select', 'Male', 'Female', 'Other']
            }, {
              label: 'Activity Level: *',
              name: 'activityLevel',
              options: ['Select', 'Sedentary', 'Lightly active', 'Moderately active', 'Very active']
            }, {
              label: 'Goals:',
              name: 'goals'
            }, {
              label: 'Exercise Preferences:',
              name: 'exercisePreferences'
            }].map(field => renderInputField(field))}

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{
              label: 'Medical Conditions:',
              name: 'medicalConditions'
            }, {
              label: 'Allergies or Intolerances:',
              name: 'allergies'
            }, {
              label: 'Medications:',
              name: 'medications'
            }, {
              label: 'Dietary Restrictions:',
              name: 'dietaryRestrictions'
            }, {
              label: 'Eating Habits:',
              name: 'eatingHabits'
            }, {
              label: 'Cooking Preferences:',
              name: 'cookingPreferences'
            }, {
              label: 'Time Constraints:',
              name: 'timeConstraints'
            }].map(field => renderInputField(field))}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-md font-semibold text-sm"
          >
            Submit
          </button>
        </form>

        <Popup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          responseHtml={responseHtml}
          onDownload={handleDownload}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default DietForm;