import { useState, useEffect } from 'react';
import { 
  Modal,
  Button,
  Input,
  Checkbox,
  RadioButton,
  Dropdown,
  ProgressBar,
  Fieldset
} from '@react95/core';

export default function Settings() {
  const [progress, setProgress] = useState(0);
  const [flavor, setFlavor] = useState('vanilla');
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 5));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Modal
      icon="https://win98icons.alexmeub.com/icons/png/settings_gear-0.png"
      title="Settings"
      style={{ width: 400, height: 450, position: 'absolute', top: '10%', left: '40%' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '8px' }}>
        <Fieldset legend="Preferences">
          <div style={{ marginBottom: '8px' }}>
            <label style={{ display: 'block', marginBottom: '4px' }}>Username:</label>
            <Input placeholder="Enter username..." />
          </div>
          
          <div style={{ marginBottom: '8px' }}>
            <label style={{ display: 'block', marginBottom: '4px' }}>Theme:</label>
            <Dropdown options={['Windows 95', 'Windows 98', 'Windows 2000']} />
          </div>

          <div style={{ marginBottom: '8px' }}>
            <Checkbox 
              checked={notifications} 
              onChange={() => setNotifications(!notifications)}
              label="Enable notifications" 
            />
          </div>
        </Fieldset>

        <Fieldset legend="Favorite Flavor">
          <RadioButton 
            checked={flavor === 'vanilla'} 
            onChange={() => setFlavor('vanilla')} 
            label="Vanilla" 
            name="flavor"
          />
          <RadioButton 
            checked={flavor === 'chocolate'} 
            onChange={() => setFlavor('chocolate')} 
            label="Chocolate" 
            name="flavor"
          />
        </Fieldset>

        <Fieldset legend="System Scan Progress">
          <ProgressBar percent={progress} />
        </Fieldset>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: 'auto' }}>
          <Button>Apply</Button>
          <Button>Cancel</Button>
        </div>
      </div>
    </Modal>
  );
}
