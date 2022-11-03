import { Tabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

type LinkTabProps = {
  label: string;
  href: string;
};

const LinkTab = (props: LinkTabProps) => {
  const router = useRouter();

  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        router.push(props.href);
      }}
      {...props}
    />
  );
};

type NavTabsProps = {
  children: ReactNode;
};

export const NavTabs = ({ children }: NavTabsProps) => {
  const tabs = [
    { pathname: '/foo', label: 'FOO' },
    { pathname: '/bar', label: 'BAR' },
    { pathname: '/baz', label: 'BAZ' },
  ];
  const { pathname } = useRouter();
  const index = tabs.findIndex((value) => value.pathname === pathname);

  return (
    <Box>
      <Box sx={{ width: '100%' }}>
        <Tabs value={index}>
          {tabs.map((tab, i) => (
            <LinkTab key={i} label={tab.label} href={tab.pathname} />
          ))}
        </Tabs>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};
