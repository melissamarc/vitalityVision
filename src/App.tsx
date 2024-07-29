
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import SignedInView from './pages/signed-in/signedinview';
import SignedOutView from './pages/signed-out/signedoutview';
import './App.css';




function App() {
  return (
    <div>
      <SignedOut>
        <SignedOutView />
      </SignedOut>

      <SignedIn>
        <SignedInView />
      </SignedIn>
    </div>
  );
}

export default App;
