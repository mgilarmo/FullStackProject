import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';


const SurveyFormReview = ({onCancel, formValues, sendSurvey, history}) => {
  const reviewFields = formFields.map(({name, label}, i) => {
    return (
      <div key={i}>
        <label>
          {label}
        </label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  })

  return (
    <div>
      <h5>
        Please confirm your entries
      </h5>
      {reviewFields}
      <button 
        className="yellow darken-3 btn-flat white-text" 
        onClick={onCancel}
      >
        Edit Survey
      </button>
      <button 
        className="green btn-flat right white-text"
        onClick={() => sendSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {formValues: state.form.surveyForm.values};
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));