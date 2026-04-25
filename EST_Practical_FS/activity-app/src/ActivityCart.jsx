const ActivityCart = ({ title, date, category }) => {
  return (
    <div style={{
      border: '1px solid  black',
      borderRadius: '8px',
      padding: '16px',
      margin: '12px',
      width: '220px',
      backgroundColor: 'white',
      boxShadow: '2px 2px 6px black'
    }}>
      <h3 style={{ margin: '0 0 8px', color: 'black' }}>{title}</h3>
      <p style={{ margin: '4px 0', color: 'black' }}>Date : {date}</p>
      <p style={{ margin: '4px 0', color: 'black' }}>Category : {category}</p>
    </div>
  );
};

export default ActivityCart;
