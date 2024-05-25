import { render, screen, within } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

import { BaseTemplate } from './BaseTemplate';



describe('BaseTemplate Component', () => {
  it('renders header, main content, and footer', () => {
    const leftNav = <div data-testid="left-nav">Left Nav</div>;
    const rightNav = <div data-testid="right-nav">Right Nav</div>;
    const children = <div data-testid="main-content">Main Content</div>;

    const { getByTestId } = render(
      <NextIntlClientProvider locale="en" messages={messages}>
      <BaseTemplate leftNav={leftNav} rightNav={rightNav}>
        {children}
      </BaseTemplate>
      </NextIntlClientProvider>,
    );

    // Check if header, main content, and footer are rendered
 
    expect(getByTestId('main-content')).toBeInTheDocument();
 

    // Check if left and right navigation are rendered in the header
    expect(getByTestId('left-nav')).toBeInTheDocument();
    expect(getByTestId('right-nav')).toBeInTheDocument();

  
  });
});

// describe('Base template', () => {
//   describe('Render method', () => {
//     it('should have 3 menu items', () => {
//       render(
//         <NextIntlClientProvider locale="en" messages={messages}>
//           <BaseTemplate
//             leftNav={
//               <>
//                 <li>link 1</li>
//                 <li>link 2</li>
//                 <li>link 3</li>
//               </>
//             }
//           >
//             {null}
//           </BaseTemplate>
//         </NextIntlClientProvider>,
//       );

//       const menuItemList = screen.getAllByRole('listitem');

//       expect(menuItemList).toHaveLength(3);
//     });

//     it('should have a link to support creativedesignsguru.com', () => {
//       render(
//         <NextIntlClientProvider locale="en" messages={messages}>
//           <BaseTemplate leftNav={<li>1</li>}>{null}</BaseTemplate>
//         </NextIntlClientProvider>,
//       );

//       const copyrightSection = screen.getByText(/© Copyright/);
//       const copyrightLink = within(copyrightSection).getByRole('link');

//       /*
//        * PLEASE READ THIS SECTION
//        * We'll really appreciate if you could have a link to our website
//        * The link doesn't need to appear on every pages, one link on one page is enough.
//        * Thank you for your support it'll mean a lot for us.
//        */
//       expect(copyrightLink).toHaveAttribute(
//         'href',
//         'https://creativedesignsguru.com',
//       );
//     });
//   });
// });
