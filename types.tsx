/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type EmployeeProps = {
    EMPLOYEE_ID: number,
    EMPOYEE_CODE: string,
    TITLE: string,
    INITIAL: string,
    NAME: string,
    SURNAME: string,
    GENDER: number,
    GENDER_DESC: string,
    CONTACT_NUMBER: string,
    EMAIL: string,
    POSITION: number,
    POS_DESC: string,
    JOB_GRADE: number,
    JOB_GRADE_DESC: string,
    BUSINESS_UNIT: number,
    BUSINESS_UNIT_DESC:string,
    STAFF_CATEGORY: number,
    CONTRACT_TYPE_DESC: string,
    DUTY_STATION: number,
    STATION_DESC: string
}
