import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
      
        const history = JSON.parse(localStorage.getItem('my_timeline') || '[]');


        const counts = history.reduce((acc, curr) => {
            acc[curr.action] = (acc[curr.action] || 0) + 1;
            return acc;
        }, {});

      
        const formattedData = [
            { name: 'Call', value: counts['Call'] || 0 },
            { name: 'Text', value: counts['Text'] || 0 },
            { name: 'Video', value: counts['Video'] || 0 },
        ];

        setChartData(formattedData);
    }, []);

 
    const COLORS = ['#2D3748', '#9F7AEA', '#48BB78']; 

    return (
        <div className="w-full h-[400px] p-5 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-black">Friendship Analytics</h2>
            <p className="text-gray-500 mb-6">By Interaction Type</p>

            <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60} 
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend iconType="rect" verticalAlign="bottom" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Stats;