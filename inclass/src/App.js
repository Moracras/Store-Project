import AuthProvider from "./context/AuthProvider";
import Approuter from "./router/AppRouter"

function App() {
  return (
    <AuthProvider>
    <Approuter/>
    </AuthProvider>
  );
}

export default App;
