import ListItem from './ListItem';
/*
props = {
	data : Array<{
			id:number,
			text:string,
			icon:<Component/>, 
			active:true
		}>
}
*/
function Lists(props) {
  return (
    <ul className='list'>
      {props.data.map((obj) => (
        <ListItem 
					key={obj.id} 
					text={obj.text} 
					icon={obj.icon} 
					active={obj.active} 
				/>
      ))}
    </ul>
  );
}

export default Lists;
