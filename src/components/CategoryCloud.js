import React from 'react';
import { connect } from 'react-redux';
import { resetCategories, setCategories } from '../actions';

const CategoryCloud = ({ cats, filtering, resetCategories, setCategories }) => {

  // Create the category cloud
  const renderedFilters = cats.map((cat, index, array) => {

    let buttonClasses = `ui button`;
    let icon = <></>;
    if (filtering) {
      buttonClasses += ` right labeled icon`;
      const iconClasses = `right icon ${cat.active ? `times` : `plus`}`;
      icon = <i className={iconClasses} />;
    }
    if (!cat.active) {
      buttonClasses += ` basic`;
    }

    return (
      <button key={index} className={buttonClasses} onClick={() => setCategories(cat.id)}>
        {icon}
        {cat.title}
      </button>
    );

  });

  // If no categories exist, yet, return a fragment to avoid an error
  if (cats.length === 0) {
    return <React.Fragment />
  }

  return (
    <div className="filters">
      <div className="content">
        {renderedFilters}
        <button class={`ui button${filtering ? ` red` : ` disabled`}`} onClick={() => resetCategories()}>
          Reset Filters
        </button>
      </div>
    </div>
  );

}

const mapStateToProps = state => {
  return {
    cats: state.categories,
    filtering: state.global.cats_filtered
  }
}

export default connect(mapStateToProps, {
  resetCategories,
  setCategories
})(CategoryCloud);
