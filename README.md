# DatePicker

这是一个时间选择控件

## Development server
run 'npm install' download the packages are used in project 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. you can modify this
in .angular-cli.json  'default'选项serve属性里设置'port': 'yourPort';

## Code scaffolding
you can use 'npm install' to down which package you want to use

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## how to use the datePicker
 first: [import {DateTimePickerModule} from 'ng-pick-datetime'] where you will use it
 
 second: [@import '~ng-pick-datetime/assets/style/picker.min.css']; 引用时间控件的样式
 
 in your pages you must use the following component:
 
 [<owl-date-time> </owl-date-time>]

the params in the picker


name	type	required	(default	description)
autoClose	boolean	Optional	(false	When specified, the calendar would be close when selected a date)

dataType	string	Optional	'date'	(Type of the value to write back to ngModel. Default type is Javascript Date object. You could change it as string type)

defaultMoment	Date / string	Optional	null	(Set the calendar's default month and year and timer picker's default value if the field is blank).

dateFormat	string	Optional	YYYY/MM/DD HH:mm	(Format of the date. You could find more in this.)

disabled	boolean	Optional	(false	When specified, disables the component.)

disabledDates	Array-Date[]	Optional	null	(Array with dates that should be disabled (not selectable).)

disabledDays	Array-number[]	Optional	null	(Array with weekday numbers that should be disabled (not selectable). Start from 0(Sunday) to 6(Saturday).)

hourFormat	string	Optional	'24'	(Specify the hour format, valid values are '12' and '24'.)

inline	boolean	Optional	(false	When enabled, displays the picker as inline. Default is false for popup mode.)

inputId	string	Optional	null	(Identifier of the focus input to match a label defined for the component.)

inputStyle	Object	Optional	null	(Inline style of the picker text input.)

inputStyleClass	string	Optional	null	(Style class of the picker text input.)

locale	Object	Optional	null	(An object having regional configuration properties for the dateTimePicker. You could learn more in below.)

maxDateCount	number	Optional	null	(Maximum number of selectable dates in multiple mode.)

max	Date / string	Optional	null	(Set the maximum date/time that is selectable.)

min	Date / string	Optional	null	(Set the minimum date/time that is selectable.)

placeHolder	string	Optional	'yyyy/mm/dd hh:mm'	(Placeholder text for the input.)

readonlyInput	boolean	Optional	true	(When specified to false, allows to enter the date manually with keyboard.)

required	boolean	Optional	false	(When present, it specifies that an input field must be filled out before submitting the form.)

showButtons	boolean	Optional	false	(When specified, the picker would have a confirm button and close button.)

selectionMode	string	Optional	'single'	(Defines the quantity of the selection, valid values are "single", "multiple" and "range".)

showHeader	boolean	Optional	false	(Defines whether to show the picker dialog header.)

showOtherMonths	boolean	Optional	true	(When it is set to false, it would only show current month's days in calendar.)

showSecondsTimer	boolean	Optional	false	(Defines whether to show a timer to control time's second value.)

style	Object	Optional	null	(Inline style of the whole component.)

styleClass	string	Optional	null	(Style class of the whole component.)

tabIndex	number	Optional	null	(Index of the element in tabbing order.)

type	string	Optional	'both'	(Specify the type of the date-time picker, valid value are 'both', 'calendar' and 'timer'.)

