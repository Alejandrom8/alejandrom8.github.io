'use client';

import React, {useEffect, useState} from 'react';
import { useTranslation } from 'next-i18next';
import { MenuItem, Select, Box } from '@mui/material';

const languages = [
  { code: 'en', label: 'En', flag: '🇺🇸' },
  { code: 'es', label: 'Es', flag: '🇲🇽' }
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures this only runs on the client
  }, []);

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  if (!mounted) return null; // Or a fallback spinner

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      variant="outlined"
      size="small"
      displayEmpty
      sx={{
        backgroundColor: 'transparent',
        color: 'white',
        minWidth: 80,
        height: 32,
        padding: 0,
        '.MuiSelect-select': {
          padding: '4px 8px',
          display: 'flex',
          alignItems: 'center',
        },
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'white',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'white',
        },
        '.MuiSvgIcon-root': {
          color: 'white',
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            mt: 1,
            minWidth: 100,
            padding: 0,
          },
        },
      }}
    >
      {languages.map((lang) => (
        <MenuItem key={lang.code} value={lang.code}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span>{lang.flag}</span> {lang.label}
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
}
