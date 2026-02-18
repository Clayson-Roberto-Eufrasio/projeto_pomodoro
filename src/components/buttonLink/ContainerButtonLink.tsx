import { ButtonLink } from './ButtonLink';
import {  HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react';

export function ContainerButtonLink() {
  return (
    <div className='container-button-link'>
      <ButtonLink><HomeIcon /></ButtonLink>
      <ButtonLink><HistoryIcon /></ButtonLink>
      <ButtonLink><SettingsIcon /></ButtonLink>
      <ButtonLink><SunIcon /></ButtonLink>
    </div>
  );
}