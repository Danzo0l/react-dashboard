import React, { useState } from 'react';
import { ToolbarProps } from '../types/toolbar.interface';
import '../Dashboard.scss';
import { ReactComponent as ToggleButton } from '../assets/img/toogle-button.svg';

export const Toolbar: React.FC<ToolbarProps> = (props) => {
  // Use .toolbar__content for your scrolling content

  const [toolbarOpen, setToolbarOpen] = useState<boolean>(false);

  return (
    <aside id="toolbar" className={toolbarOpen ? 'toolbar' : 'toolbar toggled'}>
      <div className="toolbar__header">
        <button onClick={() => setToolbarOpen(!toolbarOpen)}>
          <ToggleButton aria-label="toggle toolbar" />
        </button>
      </div>

      <div className="toolbar__content">
        {toolbarOpen ? props.children : props.toggledItems}
      </div>
    </aside>
  );
};
