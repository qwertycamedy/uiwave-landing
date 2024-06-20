import cl from './Group.module.scss';

const Group = ({ title, wrapperCl, titleCl, groupCl, children }) => {
  return (
    <div className={`${cl.wrapper} ${wrapperCl}`}>
      {title && (
        <h5 className={`${cl.title} ${titleCl} title title-block`}>{title}</h5>
      )}
      <div className={`${cl.group} ${groupCl}`}>{children}</div>
    </div>
  );
};

export default Group;
