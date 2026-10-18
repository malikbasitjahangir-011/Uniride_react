function ValidatedForm({ children }) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {children}
    </form>
  );
}

export default ValidatedForm;