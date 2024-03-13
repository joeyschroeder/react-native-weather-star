import { combineSlices } from '@reduxjs/toolkit';
import { settingsDisplaySlice } from 'store/settings/settings-display/settings-display';
import { settingsEditSaveSlice } from 'store/settings/settings-edit-save/settings-edit-save';
import { settingsEditSlice } from './settings-edit/settings-edit';

export const NAME = 'settings';

export const settingsSlice = combineSlices(settingsDisplaySlice, settingsEditSlice, settingsEditSaveSlice);
