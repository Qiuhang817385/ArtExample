import React, { useState } from 'react'
import { List } from 'react-virtualized';
import ModalEdit from './ModalEdit'
import EditChild from './EditComp/EditChild'
export default function Virtue1 () {

  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const list = [
    'Brian Vaughn1',
    'Brian Vaughn2',
    'Brian Vaughn3',
    'Brian Vaughn4',
    'Brian Vaughn5',
    'Brian Vaughn6',
    'Brian Vaughn7',
    'Brian Vaughn8',
    'Brian Vaughn9',
    'Brian Vaughn0',
    'Brian Vaughn1',
    'Brian Vaughn2',
    'Brian Vaughn3',
    'Brian Vaughn4',
    'Brian Vaughn5',
    'Brian Vaughn6',
    'Brian Vaughn7',
    'Brian Vaughn8',
    'Brian Vaughn9',
    'Brian Vaughn0',
    'Brian Vaughn1',
    'Brian Vaughn2',
    'Brian Vaughn3',
    'Brian Vaughn4',
    'Brian Vaughn5',
    'Brian Vaughn6',
    'Brian Vaughn7',
    'Brian Vaughn8',
    'Brian Vaughn9',
    'Brian Vaughn0',
    'Brian Vaughn1',
    'Brian Vaughn2',
    'Brian Vaughn3',
    'Brian Vaughn4',
    'Brian Vaughn5',
    'Brian Vaughn6',
    'Brian Vaughn7',
    'Brian Vaughn8',
    'Brian Vaughn9',
    'Brian Vaughn0',
    'Brian Vaughn1',
    'Brian Vaughn2',
    'Brian Vaughn3',
    'Brian Vaughn4',
    'Brian Vaughn5',
    'Brian Vaughn6',
    'Brian Vaughn7',
    'Brian Vaughn8',
    'Brian Vaughn9',
    'Brian Vaughn0',
    'Brian Vaughn1',
    'Brian Vaughn2',
    'Brian Vaughn3',
    'Brian Vaughn4',
    'Brian Vaughn5',
    'Brian Vaughn6',
    'Brian Vaughn7',
    'Brian Vaughn8',
    'Brian Vaughn9',
    'Brian Vaughn0',
  ];

  const handleEdit = (user) => {
    setUser(user);
    setShowModal(true);
  }
  const handleHide = () => {
    setShowModal(false);
  }

  const EditModal = showModal ? (
    <ModalEdit>
      <EditChild handleHide={handleHide} user={user} />
    </ModalEdit>
  ) : null;

  const rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) => {
    return (
      <div key={key} style={style}>
        {/* 改成对象的形式也好改 */}
        {list[index]}
        <button onClick={() => handleEdit(list[index])}>编辑</button>
        {/* 这里面就可以做数据的修改了,比如模态框 */}
      </div>
    );
  }


  return (
    <div>
      <List
        width={300}
        height={300}
        rowCount={list.length}
        rowHeight={50}
        rowRenderer={rowRenderer}
      />
      {EditModal}
    </div>
  )
}
