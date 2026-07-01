Manage the baker's holiday mode in this project.

The single source of truth is `src/App.tsx`. Two things need updating when going on holiday:
- `HOLIDAY_UNTIL: Date | null` — controls the reopen date and holiday mode
- The `holidayMessage` prop on `<OrderStatusBanner>` — the translated message shown above the reopen date

## Steps

1. Ask the user: "Is the baker going on holiday or returning from one?"

### Going on holiday

2. Ask: "What is the first day orders reopen? (e.g. 2026-08-10)"
3. Ask: "Any custom holiday message? Leave blank to keep the default summer holiday message."

4. Read `src/App.tsx`.

5. Update `HOLIDAY_UNTIL`:
   ```
   const HOLIDAY_UNTIL: Date | null = new Date("YYYY-MM-DD");
   ```

6. If the user provided a custom message, update the `holidayMessage` prop on `<OrderStatusBanner>`. Otherwise leave it using `t("We're on our summer holiday! 🌞🏖️☀️")`.
   - If a custom message is provided, also add it to all three i18n files (`src/i18n/en.json`, `src/i18n/hu.json`, `src/i18n/sr.json`) as a new key. Ask the user for translations if needed.

7. Run `npx tsc --noEmit` to confirm no type errors.

8. Commit: `chore: set baker holiday until YYYY-MM-DD`

9. Ask the user if they want to push.

### Returning from holiday

2. Read `src/App.tsx`.

3. Set `HOLIDAY_UNTIL` to null:
   ```
   const HOLIDAY_UNTIL: Date | null = null;
   ```

4. Run `npx tsc --noEmit` to confirm no type errors.

5. Commit: `chore: end baker holiday, reset HOLIDAY_UNTIL to null`

6. Ask the user if they want to push.
