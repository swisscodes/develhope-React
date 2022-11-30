import React, { useMemo } from 'react';

function FilteredList({ todosList }) {
  return <div>{useMemo(() => returnFiltered(todosList), [todosList])}</div>;
}

function returnFiltered(todosList) {
  return todosList
    .filter((obj) => obj.age > 18)
    .map((obj) => <p>{`${obj.name} ${obj.age}`}</p>);
}

export default FilteredList;
