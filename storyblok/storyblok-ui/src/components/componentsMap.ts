import { SBArticle, SBFooter, SBHeader, SBPage } from './contentTypes';
import {
  SBColumn,
  SBGrid,
  SBImage,
  SBLink,
  SBRecentArticles,
  SBRichtext,
  SBTypography,
} from './elements';

const elements = {
  typography: SBTypography,
  link: SBLink,
  image: SBImage,
  grid: SBGrid,
  column: SBColumn,
  richtext: SBRichtext,
  recentArticles: SBRecentArticles,
};

const contentTypes = {
  page: SBPage,
  article: SBArticle,
  footer: SBFooter,
  header: SBHeader,
};

export const componentsMap: Record<string, any> = {
  ...elements,
  ...contentTypes,
};
