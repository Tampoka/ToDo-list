import { useState } from 'react';

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);
	const onSubmit = (e) => {
		e.preventDefault();
		if (!text) {
			alert('新しいタスクを追加してください');
			return;
		}
		onAdd({ text, day, reminder });

		setText('');
		setDay('');
		setReminder(false);
	};

	return (
		<form className='add-form' onSubmit={onSubmit}>
			<div className='form-control'>
				<label htmlFor=''>タスク</label>
				<input
					type='text'
					placeholder='新しいタスク'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className='form-control'>
				<label htmlFor=''>日付と時刻</label>
				<input
					type='text'
					placeholder='11月23日　14:30'
					value={day}
					onChange={(e) => setDay(e.target.value)}
				/>
			</div>
			<div className='form-control form-control-check'>
				<label htmlFor=''>リマインダー</label>
				<input
					type='checkbox' checked={reminder}
					value={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}
				/>
			</div>
			<input type='submit' value='タスクを追加' className='btn btn-block' />
		</form>
	);
};

export default AddTask;
