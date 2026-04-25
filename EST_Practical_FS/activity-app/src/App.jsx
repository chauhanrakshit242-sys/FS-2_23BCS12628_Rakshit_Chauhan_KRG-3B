import ActivityCart from './ActivityCart';

const activities = [
  { title: 'Morning Run',      date: '2026-04-25', category: 'Fitness'   },
  { title: 'React Workshop',   date: '2026-04-26', category: 'Education' },
  { title: 'Team Hiking Trip', date: '2026-04-27', category: 'Outdoor'   },
  { title: 'Cooking Class',    date: '2026-04-28', category: 'Lifestyle' },
];

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '20px' }}>
      {activities.map((activity, index) => (
        <ActivityCart
          key={index}
          title={activity.title}
          date={activity.date}
          category={activity.category}
        />
      ))}
    </div>
  );
}

export default App;
