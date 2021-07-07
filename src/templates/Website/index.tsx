import React from 'react';

import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import { MessagesContainer } from '../../components/MessageContainer';
import Breadcrumbs from '../../components/Breadcrumbs';
import { NavLinkTypes } from '../../types/navLinksTypes';
import Filters from '../../components/Filters';
import { FilterTypes } from '../../types/filterTypes';
import Loading from '../../components/Loading';

import { useLoading } from '../../hooks';

import * as S from './styles';

interface WebsiteTemplate {
  children: React.ReactNode;
  breadcrumbs?: NavLinkTypes[] | undefined;
  filters?: FilterTypes[] | undefined;
}

export const WebsiteTemplate: React.FC<WebsiteTemplate> = ({
  children,
  breadcrumbs,
  filters,
}) => {
  const { isLoading } = useLoading();

  return (
    <S.Wrapper>
      {isLoading && <Loading />}
      <MessagesContainer />
      <Topbar />
      <Breadcrumbs breadcrumbPath={breadcrumbs} />
      <Filters filters={filters} />

      <main className="main">{children}</main>

      <Footer />
    </S.Wrapper>
  );
};
