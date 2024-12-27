import React from 'react';
import { ResponsiveContainer, Treemap, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CorrelationViz = ({ data }) => {
  const transformData = (rawData) => {
    const categories = {
      name: 'correlations',
      children: [
        {
          name: 'Western-MBTI',
          children: processCorrelations(rawData, 'westernSign', 'mbti')
        },
        {
          name: 'Chinese-MBTI',
          children: processCorrelations(rawData, 'chineseSign', 'mbti')
        },
        {
          name: 'Archetype-MBTI',
          children: processCorrelations(rawData, 'primaryArchetype', 'mbti')
        }
      ]
    };
    return categories;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Personality Correlations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <Treemap
              data={transformData(data || [])}
              dataKey="size"
              aspectRatio={4/3}
              stroke="#fff"
              fill="#8884d8"
            />
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CorrelationViz;