import { useEffect, useState } from "react";

const Physics = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
       
        const savedData = JSON.parse(localStorage.getItem('my_timeline') || '[]');
    
        setActivities(savedData);
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-xl font-bold mb-4">Timeline</h2>
            
            
            <div className="flex flex-col gap-3">
                {activities.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 border p-4 rounded-xl shadow-sm bg-white">
                 
                        <div className="p-2 bg-blue-50 rounded-full">
                             {item.action === 'Call' ? '📞' : item.action === 'Text' ? '💬' : '🎥'}
                        </div>
                        
                        <div>
                            <p className="font-medium text-black">{item.action} with {item.name}</p>
                            <p className="text-sm text-black">{item.date}</p>
                        </div>
                    </div>
                ))}
                
                {activities.length === 0 && <p>No Active right know</p>}
            </div>
        </div>
    );
};

export default Physics;
