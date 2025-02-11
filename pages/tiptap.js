'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { AppBar, Toolbar, IconButton, Paper } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CodeIcon from '@mui/icons-material/Code';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatHeadingIcon from '@mui/icons-material/FormatSize';

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start typing...</p>',
  });

  if (!editor) {
    return null; 
  }

  return (
    <Paper
      elevation={3}
      sx={{ width: '100%', maxWidth: '800px', margin: 'auto', padding: '10px' }}
    >
      {/* Toolbar */}
      <AppBar
        position='static'
        color='default'
        sx={{ boxShadow: 'none', borderBottom: '1px solid #ddd' }}
      >
        <Toolbar
          variant='dense'
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div>
            <IconButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={!editor.can().chain().focus().toggleBold().run()}
            >
              <FormatBoldIcon />
            </IconButton>
            <IconButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={!editor.can().chain().focus().toggleItalic().run()}
            >
              <FormatItalicIcon />
            </IconButton>
            <IconButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              disabled={!editor.can().chain().focus().toggleStrike().run()}
            >
              <FormatStrikethroughIcon />
            </IconButton>
            <IconButton
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
            >
              <FormatQuoteIcon />
            </IconButton>
            <IconButton
              onClick={() => editor.chain().focus().toggleCode().run()}
            >
              <CodeIcon />
            </IconButton>
            <IconButton
              onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
              <FormatListBulletedIcon />
            </IconButton>
            <IconButton
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
            >
              <FormatListNumberedIcon />
            </IconButton>
            <IconButton
              onClick={() => editor.chain().focus().setParagraph().run()}
            >
              <FormatAlignLeftIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                editor.chain().focus().setHeading({ level: 1 }).run()
              }
            >
              <FormatHeadingIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Editor */}
      <EditorContent
        editor={editor}
        style={{
          minHeight: '200px',
          padding: '10px',
          border: 'none',
          outline: 'none',
        }}
      />
    </Paper>
  );
}
