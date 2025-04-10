import {FC, ScriptHTMLAttributes, useEffect} from 'react';

interface ScriptProps extends ScriptHTMLAttributes<HTMLScriptElement> {
  id: string;
}

export const Script: FC<ScriptProps> = ({src, id, async}) => {
  useEffect(() => {
    if (!src || !id) {
      return;
    }
    const existing = document.querySelector(`script#${id}`);
    if (existing) {
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = async ?? false;
    script.id = id;

    document.head.appendChild(script);
  }, [src, id, async]);

  return null;
};