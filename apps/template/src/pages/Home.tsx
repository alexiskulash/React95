import { useState } from 'react';
import { Modal, Frame, Button, Alert } from '@react95/core';

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <Modal
        icon="https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png"
        title="Welcome"
        style={{ width: 300, height: 200, position: 'absolute', top: '10%', left: '10%' }}
      >
        <Frame bg="white" boxShadow="in" p={4} style={{ height: '100%', overflow: 'auto' }}>
          <h2>Welcome to React95 Skeleton App</h2>
          <p>
            This is a prototype using the @react95/core design system.
            It is set up with Vite, React Router, and Typescript.
          </p>
          <Button onClick={() => setShowAlert(true)}>Show Alert</Button>
        </Frame>
      </Modal>

      {showAlert && (
        <Alert
          title="Information"
          message="This is a standard React95 alert box!"
          closeAlert={() => setShowAlert(false)}
        />
      )}
    </>
  );
}
