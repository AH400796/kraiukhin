import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import {
  AppContent,
  Wrapper,
  Main,
  StyledContainerMain,
} from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
// import Container from 'components/Container/Container';
import Aside from 'components/Aside/Aside';

export default function SharedLayout() {
  return (
    <Wrapper>
      <AppContent>
        <Header />
        <Section>
          <StyledContainerMain>
            <Main>
              <Aside />
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </Main>
          </StyledContainerMain>
        </Section>
      </AppContent>
      <Footer />
    </Wrapper>
  );
}
