import './App.css';
import React, { useState } from 'react';
import ReactQuill,{Quill} from 'react-quill';
import QuillImageDropAndPaste from 'quill-image-drop-and-paste'
import ImageResize  from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';
Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste)
Quill.register('modules/imageResize',ImageResize)
function App() {
 
  const [value, setValue] = useState('');

  return <ReactQuill theme="snow" value={value} onChange={setValue} modules={{imageDropAndPaste: true,imageResize: { parchment: Quill.import('parchment')}}} />;
}

export default App;
