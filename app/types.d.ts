declare module '@remix-run/react' {
  import {PageVariant} from '~/components/PageLayout';

  interface Handle {
    pageVariant: PageVariant;
  }
}