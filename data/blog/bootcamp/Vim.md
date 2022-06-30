---
title: Vim - No more pain, no more suffering
date: '2022-07-30'
tags: ['Vim']
images: ['/static/images/postImages/vim.jpg']
draft: true
summary: Basic of Vim. Just enough so you can quit vim and get back to coding.
---

# Launching Vim

```bash
vim
```

# Vim Modes

| Mode    | Description                                                                    |
| ------- | ------------------------------------------------------------------------------ |
| Edit    | Keys you type are actually inserting text into your document                   |
| Command | Keys you type are actually commands. Allows you to navigate, copy, paste, etc. |

By **default**, Vim is in the **command** mode.

# Moving around

- "H" moves left
- "K" moves up
- "L" moves right
- "J" moves down.

You can, of course, use the **arrow keys** as well.

# Edit a file

Switch into **edit** mode:

- Press "i" to begin inserting text at the current cursor position.
- Press "a" to begin inserting after the current cursor position.

Get **out** of edit mode:

- Press "Esc" to exit edit mode.

# Common Commands

- `Y` copies a line of text to the buffer.
- `P` pastes it to the cursor's current position.
- `dd` will delete the whole line of text. This will also effectively "cut" a line of text as well. When you delete a line, it's placed in the buffer.
- `yy` copies a whole line of text.

# Saving a file

1. Make sure you are in command mode: use `ESC` to exit edit mode.
2. Type `:wq` to save the file.

# Quit Vim

- :wq - write (save) and quit file (and vim)
- :q! - quit and ignore changes made since last file save.

# Vim Cheat Sheet

[here](http://www.viemu.com/vi-vim-cheat-sheet.gif)