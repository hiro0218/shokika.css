function TheFooter() {
  const version = import.meta.env.VITE_APP_VERSION;

  return (
    <footer className="footer">
      <p>&copy; hiro. Released under the MIT License. v{version}</p>
    </footer>
  );
}

export default TheFooter;
