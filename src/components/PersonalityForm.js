import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const PersonalityForm = () => {
  const [formData, setFormData] = useState({
    westernSign: '',
    chineseSign: '',
    mbti: '',
    primaryArchetype: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Personality Insights Survey</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="westernSign">Western Astrological Sign</Label>
              <select
                id="westernSign"
                name="westernSign"
                className="w-full p-2 border rounded"
                value={formData.westernSign}
                onChange={handleChange}
              >
                <option value="">Select your sign</option>
                {['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
                  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
                  .map(sign => (
                    <option key={sign} value={sign}>{sign}</option>
                  ))
                }
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="chineseSign">Chinese Zodiac Sign</Label>
              <select
                id="chineseSign"
                name="chineseSign"
                className="w-full p-2 border rounded"
                value={formData.chineseSign}
                onChange={handleChange}
              >
                <option value="">Select your sign</option>
                {['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake',
                  'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']
                  .map(sign => (
                    <option key={sign} value={sign}>{sign}</option>
                  ))
                }
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mbti">Myers-Briggs Type</Label>
              <select
                id="mbti"
                name="mbti"
                className="w-full p-2 border rounded"
                value={formData.mbti}
                onChange={handleChange}
              >
                <option value="">Select your type</option>
                {['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP',
                  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP']
                  .map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))
                }
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="primaryArchetype">Primary Jung Archetype</Label>
              <select
                id="primaryArchetype"
                name="primaryArchetype"
                className="w-full p-2 border rounded"
                value={formData.primaryArchetype}
                onChange={handleChange}
              >
                <option value="">Select your archetype</option>
                {['Hero', 'Mentor', 'Threshold Guardian', 'Herald',
                  'Shapeshifter', 'Shadow', 'Trickster', 'Ally']
                  .map(archetype => (
                    <option key={archetype} value={archetype}>{archetype}</option>
                  ))
                }
              </select>
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalityForm;