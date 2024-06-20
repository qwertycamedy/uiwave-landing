import MyForm from 'components/_ui/form/MyForm';
import cl from './Form.module.scss';
import MyInput from 'components/_ui/input/MyInput';
import MyTextarea from 'components/_ui/textarea/MyTextarea';
import { useDispatch, useSelector } from 'react-redux';
import {
  feedbackSel,
  postFeedback,
  setCompany,
  setEmail,
  setFirst,
  setLast,
  setMessage,
} from 'store/slices/feedback/feedbackSlice';
import MyBtn from 'components/_ui/btn/MyBtn';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

const Form = () => {
  const dispatch = useDispatch();
  const { first, last, company, email, message } = useSelector(feedbackSel);

  const [submitEnabled, setSubmitEnabled] = useState(null);

  const onPostFeedback = () => {
    dispatch(
      postFeedback({
        bodyParams: {
          firstName: first,
          lastName: last,
          company,
          email,
          message,
        },
      }),
    );
  };

  const onCaptchaChange = (value) => {
    console.log('Captcha value:', value);
    setSubmitEnabled(value !== null);
  };

  return (
    <MyForm classnames={cl.form} onSubmit={onPostFeedback}>
      <div className={cl.form__flex}>
        <MyInput
          value={first}
          setValue={setFirst}
          type="text"
          required
          placeholder={'First name'}
        />
        <MyInput
          value={last}
          setValue={setLast}
          type="text"
          required
          placeholder={'Last name'}
        />
      </div>
      <MyInput
        value={company}
        setValue={setCompany}
        required={false}
        type="text"
        placeholder={'Company (Optional)'}
      />
      <MyInput
        value={email}
        setValue={setEmail}
        type="emial"
        required
        placeholder={'Your email'}
      />
      <MyTextarea
        value={message}
        setValue={setMessage}
        placeholder={'Your message'}
      />
      <ReCAPTCHA
        sitekey="6LfZFU0pAAAAALCqSUqlkTT24ZQx_nedz5cSN7Fr"
        theme="dark"
        onChange={onCaptchaChange}
      />
      <MyBtn
        classNames={cl.submit + ' btn-accent w-full'}
        disabled={submitEnabled ? '' : 'disabled'}
      >
        Send
      </MyBtn>
    </MyForm>
  );
};

export default Form;
