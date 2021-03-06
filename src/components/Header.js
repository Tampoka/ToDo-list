import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';
const Header = ({ title, onAdd, showAdd }) => {
	const location=useLocation()
	return (
		<header className='header'>
			<h1>{title}</h1>
		{location.pathname==='/' && <Button
				color={showAdd ? 'red' : 'green'}
				text={showAdd ? 'リストに戻る' : '新しいタスクを追加'}
				onClick={onAdd}
			/>}
		</header>
	);
};

Header.defaultProps = {
	title: 'ToDoリスト',
};

// Header.PropTypes = {
// 	title: PropTypes.string,
// };

//CSS in JS
// const headingStyle = { color: 'red', backgroundColor: 'black' };
export default Header;
