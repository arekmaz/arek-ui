import { Portal, DatePickerRootProps } from "@ark-ui/react";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { IconButton } from "~/components/ui/icon-button";
import { DatePicker as D } from "../components/ui/date-picker";

import { Input } from "~/components/ui/input";
import { Story } from "./storyHelpers";
import { InputGroup } from "~/components/ui/input-group";

export const Demo = (props: DatePickerRootProps) => {
  return (
    <D.Root
      positioning={{ sameWidth: true }}
      startOfWeek={1}
      selectionMode="range"
      {...props}
    >
      <D.Label>Date Picker</D.Label>
      <D.Control>
        <D.Input asChild>
          <Input />
        </D.Input>
        <D.Trigger asChild>
          <IconButton variant="outline" aria-label="Open date picker">
            <CalendarIcon />
          </IconButton>
        </D.Trigger>
      </D.Control>
      <D.Positioner>
        <D.Content>
          <D.View view="day">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableHead>
                      <D.TableRow>
                        {api.weekDays.map((weekDay, id) => (
                          <D.TableHeader key={id}>
                            {weekDay.narrow}
                          </D.TableHeader>
                        ))}
                      </D.TableRow>
                    </D.TableHead>
                    <D.TableBody>
                      {api.weeks.map((week, id) => (
                        <D.TableRow key={id}>
                          {week.map((day, id) => (
                            <D.TableCell key={id} value={day}>
                              <D.TableCellTrigger asChild>
                                <IconButton variant="ghost">
                                  {day.day}
                                </IconButton>
                              </D.TableCellTrigger>
                            </D.TableCell>
                          ))}
                        </D.TableRow>
                      ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
          <D.View view="month">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableBody>
                      {api
                        .getMonthsGrid({ columns: 4, format: "short" })
                        .map((months, id) => (
                          <D.TableRow key={id}>
                            {months.map((month, id) => (
                              <D.TableCell key={id} value={month.value}>
                                <D.TableCellTrigger asChild>
                                  <Button variant="ghost">{month.label}</Button>
                                </D.TableCellTrigger>
                              </D.TableCell>
                            ))}
                          </D.TableRow>
                        ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
          <D.View view="year">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableBody>
                      {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                        <D.TableRow key={id}>
                          {years.map((year, id) => (
                            <D.TableCell key={id} value={year.value}>
                              <D.TableCellTrigger asChild>
                                <Button variant="ghost">{year.label}</Button>
                              </D.TableCellTrigger>
                            </D.TableCell>
                          ))}
                        </D.TableRow>
                      ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
        </D.Content>
      </D.Positioner>
    </D.Root>
  );
};

export const BasicDatePicker = () => {
  return (
    <D>
      <D.Label>Label</D.Label>
      <D.Control>
        <D.Input asChild>
          <Input />
        </D.Input>
        <D.Trigger>📅</D.Trigger>
        <D.ClearTrigger>Clear</D.ClearTrigger>
      </D.Control>
      <Portal>
        <D.Positioner>
          <D.Content>
            <D.YearSelect />
            <D.MonthSelect />
            <D.View view="day">
              <D.Context>
                {(api) => (
                  <>
                    <D.ViewControl>
                      <D.PrevTrigger>Prev</D.PrevTrigger>
                      <D.ViewTrigger>
                        <D.RangeText />
                      </D.ViewTrigger>
                      <D.NextTrigger>Next</D.NextTrigger>
                    </D.ViewControl>
                    <D.Table>
                      <D.TableHead>
                        <D.TableRow>
                          {api.weekDays.map((weekDay, id) => (
                            <D.TableHeader key={id}>
                              {weekDay.short}
                            </D.TableHeader>
                          ))}
                        </D.TableRow>
                      </D.TableHead>
                      <D.TableBody>
                        {api.weeks.map((week, id) => (
                          <D.TableRow key={id}>
                            {week.map((day, id) => (
                              <D.TableCell key={id} value={day}>
                                <D.TableCellTrigger asChild>
                                  <IconButton variant="ghost">
                                    {day.day}
                                  </IconButton>
                                </D.TableCellTrigger>
                              </D.TableCell>
                            ))}
                          </D.TableRow>
                        ))}
                      </D.TableBody>
                    </D.Table>
                  </>
                )}
              </D.Context>
            </D.View>
            <D.View view="month">
              <D.Context>
                {(api) => (
                  <>
                    <D.ViewControl>
                      <D.PrevTrigger>Prev</D.PrevTrigger>
                      <D.ViewTrigger>
                        <D.RangeText />
                      </D.ViewTrigger>
                      <D.NextTrigger>Next</D.NextTrigger>
                    </D.ViewControl>
                    <D.Table>
                      <D.TableBody>
                        {api
                          .getMonthsGrid({ columns: 4, format: "short" })
                          .map((months, id) => (
                            <D.TableRow key={id}>
                              {months.map((month, id) => (
                                <D.TableCell key={id} value={month.value}>
                                  <D.TableCellTrigger>
                                    {month.label}
                                  </D.TableCellTrigger>
                                </D.TableCell>
                              ))}
                            </D.TableRow>
                          ))}
                      </D.TableBody>
                    </D.Table>
                  </>
                )}
              </D.Context>
            </D.View>
            <D.View view="year">
              <D.Context>
                {(api) => (
                  <>
                    <D.ViewControl>
                      <D.PrevTrigger>Prev</D.PrevTrigger>
                      <D.ViewTrigger>
                        <D.RangeText />
                      </D.ViewTrigger>
                      <D.NextTrigger>Next</D.NextTrigger>
                    </D.ViewControl>
                    <D.Table>
                      <D.TableBody>
                        {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                          <D.TableRow key={id}>
                            {years.map((year, id) => (
                              <D.TableCell key={id} value={year.value}>
                                <D.TableCellTrigger>
                                  {year.label}
                                </D.TableCellTrigger>
                              </D.TableCell>
                            ))}
                          </D.TableRow>
                        ))}
                      </D.TableBody>
                    </D.Table>
                  </>
                )}
              </D.Context>
            </D.View>
          </D.Content>
        </D.Positioner>
      </Portal>
    </D>
  );
};

export const RangeDatePicker = () => {
  return (
    <D positioning={{ sameWidth: true }} startOfWeek={1} selectionMode="range">
      <D.Label>Range Date Picker</D.Label>
      <D.Control>
        <D.Input index={0} asChild>
          <Input />
        </D.Input>
        <D.Input index={1} asChild>
          <Input />
        </D.Input>
        <D.Trigger asChild>
          <IconButton variant="outline" aria-label="Open date picker">
            <CalendarIcon />
          </IconButton>
        </D.Trigger>
      </D.Control>
      <D.Positioner>
        <D.Content>
          <D.View view="day">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableHead>
                      <D.TableRow>
                        {api.weekDays.map((weekDay, id) => (
                          <D.TableHeader key={id}>
                            {weekDay.narrow}
                          </D.TableHeader>
                        ))}
                      </D.TableRow>
                    </D.TableHead>
                    <D.TableBody>
                      {api.weeks.map((week, id) => (
                        <D.TableRow key={id}>
                          {week.map((day, id) => (
                            <D.TableCell key={id} value={day}>
                              <D.TableCellTrigger asChild>
                                <IconButton variant="ghost">
                                  {day.day}
                                </IconButton>
                              </D.TableCellTrigger>
                            </D.TableCell>
                          ))}
                        </D.TableRow>
                      ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
          <D.View view="month">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableBody>
                      {api
                        .getMonthsGrid({ columns: 4, format: "short" })
                        .map((months, id) => (
                          <D.TableRow key={id}>
                            {months.map((month, id) => (
                              <D.TableCell key={id} value={month.value}>
                                <D.TableCellTrigger asChild>
                                  <Button variant="ghost">{month.label}</Button>
                                </D.TableCellTrigger>
                              </D.TableCell>
                            ))}
                          </D.TableRow>
                        ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
          <D.View view="year">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableBody>
                      {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                        <D.TableRow key={id}>
                          {years.map((year, id) => (
                            <D.TableCell key={id} value={year.value}>
                              <D.TableCellTrigger asChild>
                                <Button variant="ghost">{year.label}</Button>
                              </D.TableCellTrigger>
                            </D.TableCell>
                          ))}
                        </D.TableRow>
                      ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
        </D.Content>
      </D.Positioner>
    </D>
  );
};

export const WithInputGroup = () => {
  return (
    <D positioning={{ sameWidth: true }} startOfWeek={1} selectionMode="single">
      <D.Label>With Input Group</D.Label>
      <D.Control>
        <InputGroup>
          <D.Input asChild>
            <InputGroup.Input />
          </D.Input>
          <D.Trigger asChild>
            <InputGroup.RightAddon>
              <IconButton unstyled aria-label="Open date picker">
                <CalendarIcon />
              </IconButton>
            </InputGroup.RightAddon>
          </D.Trigger>
        </InputGroup>
      </D.Control>
      <D.Positioner>
        <D.Content>
          <D.View view="day">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableHead>
                      <D.TableRow>
                        {api.weekDays.map((weekDay, id) => (
                          <D.TableHeader key={id}>
                            {weekDay.narrow}
                          </D.TableHeader>
                        ))}
                      </D.TableRow>
                    </D.TableHead>
                    <D.TableBody>
                      {api.weeks.map((week, id) => (
                        <D.TableRow key={id}>
                          {week.map((day, id) => (
                            <D.TableCell key={id} value={day}>
                              <D.TableCellTrigger asChild>
                                <IconButton variant="ghost">
                                  {day.day}
                                </IconButton>
                              </D.TableCellTrigger>
                            </D.TableCell>
                          ))}
                        </D.TableRow>
                      ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
          <D.View view="month">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableBody>
                      {api
                        .getMonthsGrid({ columns: 4, format: "short" })
                        .map((months, id) => (
                          <D.TableRow key={id}>
                            {months.map((month, id) => (
                              <D.TableCell key={id} value={month.value}>
                                <D.TableCellTrigger asChild>
                                  <Button variant="ghost">{month.label}</Button>
                                </D.TableCellTrigger>
                              </D.TableCell>
                            ))}
                          </D.TableRow>
                        ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
          <D.View view="year">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableBody>
                      {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                        <D.TableRow key={id}>
                          {years.map((year, id) => (
                            <D.TableCell key={id} value={year.value}>
                              <D.TableCellTrigger asChild>
                                <Button variant="ghost">{year.label}</Button>
                              </D.TableCellTrigger>
                            </D.TableCell>
                          ))}
                        </D.TableRow>
                      ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
        </D.Content>
      </D.Positioner>
    </D>
  );
};

export const ReadonlyInput = () => {
  return (
    <D positioning={{ sameWidth: true }} startOfWeek={1} selectionMode="single">
      <D.Label>With Input Group - readonly input</D.Label>
      <D.Control>
        <D.Trigger asChild>
          <InputGroup>
            <D.Input asChild readOnly>
              <InputGroup.Input />
            </D.Input>
            <InputGroup.RightAddon>
              <IconButton unstyled aria-label="Open date picker">
                <CalendarIcon />
              </IconButton>
            </InputGroup.RightAddon>
          </InputGroup>
        </D.Trigger>
      </D.Control>
      <D.Positioner>
        <D.Content>
          <D.View view="day">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableHead>
                      <D.TableRow>
                        {api.weekDays.map((weekDay, id) => (
                          <D.TableHeader key={id}>
                            {weekDay.narrow}
                          </D.TableHeader>
                        ))}
                      </D.TableRow>
                    </D.TableHead>
                    <D.TableBody>
                      {api.weeks.map((week, id) => (
                        <D.TableRow key={id}>
                          {week.map((day, id) => (
                            <D.TableCell key={id} value={day}>
                              <D.TableCellTrigger asChild>
                                <IconButton variant="ghost">
                                  {day.day}
                                </IconButton>
                              </D.TableCellTrigger>
                            </D.TableCell>
                          ))}
                        </D.TableRow>
                      ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
          <D.View view="month">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableBody>
                      {api
                        .getMonthsGrid({ columns: 4, format: "short" })
                        .map((months, id) => (
                          <D.TableRow key={id}>
                            {months.map((month, id) => (
                              <D.TableCell key={id} value={month.value}>
                                <D.TableCellTrigger asChild>
                                  <Button variant="ghost">{month.label}</Button>
                                </D.TableCellTrigger>
                              </D.TableCell>
                            ))}
                          </D.TableRow>
                        ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
          <D.View view="year">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableBody>
                      {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                        <D.TableRow key={id}>
                          {years.map((year, id) => (
                            <D.TableCell key={id} value={year.value}>
                              <D.TableCellTrigger asChild>
                                <Button variant="ghost">{year.label}</Button>
                              </D.TableCellTrigger>
                            </D.TableCell>
                          ))}
                        </D.TableRow>
                      ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
        </D.Content>
      </D.Positioner>
    </D>
  );
};

export const RangePickerSingleReadonlyInput = () => {
  return (
    <D positioning={{ sameWidth: true }} startOfWeek={1} selectionMode="range">
      <D.Label>Range - single readonly input</D.Label>
      <D.Control>
        <D.Trigger asChild>
          <InputGroup className="min-w-[300px]">
            <D.Context>
              {(api) => (
                <D.Input asChild readOnly>
                  <InputGroup.Input
                    value={api.value.join(" - ")}
                    placeholder="yyyy-mm-dd - yyyy-mm-dd"
                  />
                </D.Input>
              )}
            </D.Context>
            <InputGroup.RightAddon>
              <IconButton unstyled aria-label="Open date picker">
                <CalendarIcon />
              </IconButton>
            </InputGroup.RightAddon>
          </InputGroup>
        </D.Trigger>
      </D.Control>
      <D.Positioner>
        <D.Content>
          <D.View view="day">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableHead>
                      <D.TableRow>
                        {api.weekDays.map((weekDay, id) => (
                          <D.TableHeader key={id}>
                            {weekDay.narrow}
                          </D.TableHeader>
                        ))}
                      </D.TableRow>
                    </D.TableHead>
                    <D.TableBody>
                      {api.weeks.map((week, id) => (
                        <D.TableRow key={id}>
                          {week.map((day, id) => (
                            <D.TableCell key={id} value={day}>
                              <D.TableCellTrigger asChild>
                                <IconButton variant="ghost">
                                  {day.day}
                                </IconButton>
                              </D.TableCellTrigger>
                            </D.TableCell>
                          ))}
                        </D.TableRow>
                      ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
          <D.View view="month">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableBody>
                      {api
                        .getMonthsGrid({ columns: 4, format: "short" })
                        .map((months, id) => (
                          <D.TableRow key={id}>
                            {months.map((month, id) => (
                              <D.TableCell key={id} value={month.value}>
                                <D.TableCellTrigger asChild>
                                  <Button variant="ghost">{month.label}</Button>
                                </D.TableCellTrigger>
                              </D.TableCell>
                            ))}
                          </D.TableRow>
                        ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
          <D.View view="year">
            <D.Context>
              {(api) => (
                <>
                  <D.ViewControl>
                    <D.PrevTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronLeftIcon />
                      </IconButton>
                    </D.PrevTrigger>
                    <D.ViewTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <D.RangeText />
                      </Button>
                    </D.ViewTrigger>
                    <D.NextTrigger asChild>
                      <IconButton variant="ghost" size="sm">
                        <ChevronRightIcon />
                      </IconButton>
                    </D.NextTrigger>
                  </D.ViewControl>
                  <D.Table>
                    <D.TableBody>
                      {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                        <D.TableRow key={id}>
                          {years.map((year, id) => (
                            <D.TableCell key={id} value={year.value}>
                              <D.TableCellTrigger asChild>
                                <Button variant="ghost">{year.label}</Button>
                              </D.TableCellTrigger>
                            </D.TableCell>
                          ))}
                        </D.TableRow>
                      ))}
                    </D.TableBody>
                  </D.Table>
                </>
              )}
            </D.Context>
          </D.View>
        </D.Content>
      </D.Positioner>
    </D>
  );
};

export const DatePickers = () => {
  return (
    <Story title="date pickers" componentFilename="date-picker">
      <Demo selectionMode="single" />
      <BasicDatePicker />
      <RangeDatePicker />
      <WithInputGroup />
      <ReadonlyInput />
      <RangePickerSingleReadonlyInput />
    </Story>
  );
};
