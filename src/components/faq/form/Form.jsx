import MyForm from 'components/_ui/form/MyForm';
import cl from './Form.module.scss';
import MyInput from 'components/_ui/input/MyInput';
import { useDispatch, useSelector } from 'react-redux';
import MyBtn from 'components/_ui/btn/MyBtn';
import {
  faqSel,
  postProblem,
  setEmail,
  setFirst,
  setProblem,
} from 'store/slices/faq/faqSlice';
import { authSel } from 'store/slices/auth/authSlice';

const Form = () => {
  const dispatch = useDispatch();
  const { first, tel, email, problem } = useSelector(faqSel);
  const { csrf } = useSelector(authSel);

  console.log(csrf);

  const onPostProblem = () => {
    dispatch(
      postProblem({
        csrfToken: csrf,
        bodyParams: { name: first, phoneNumber: tel, email, question: problem },
      }),
    );
  };

  return (
    <MyForm classnames={cl.form} onSubmit={onPostProblem}>
      <MyInput
        value={first}
        setValue={setFirst}
        type="text"
        placeholder="Name"
      />
      <MyInput
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Email"
      />
      <MyInput
        value={problem}
        setValue={setProblem}
        type="text"
        placeholder="Your Question"
      />
      <MyBtn classNames={cl.submit + ' btn-accent w-full'}>Send</MyBtn>
    </MyForm>
  );
};

export default Form;
