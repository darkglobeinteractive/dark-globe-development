import React from 'react';
import { connect } from 'react-redux';
import { resetCategories, setCategories } from '../actions';

const CategoryCloud = ({ cats, filtering, resetCategories, setCategories }) => {

  // Create the category cloud
  const renderedFilters = cats.map((cat, index, array) => {

    // Create default classes and icon for this category button
    let buttonClasses = `ui button`;
    let icon = <></>;

    // If the app is being filtered, set the classes and icon accordingly
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

  return (
    <div id="filters">
      {renderedFilters}
      <button className={`ui button red${filtering ? `` : ` disabled`}`} onClick={() => resetCategories()}>
        Reset Filters
      </button>
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
