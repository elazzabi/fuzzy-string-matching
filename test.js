import test from 'ava';
import fsm from '.';

test('Testing functionality', t => {
	t.is(fsm('abc', 'abc'), 1, 'Equal strings');
	t.is(fsm('abc', ''), 0, 'Empty string');
	t.is(fsm('AbC', 'aBc'), 1, 'Case sensitive = false');
	t.is(fsm('AbC', 'aBc', true), 0, 'Case sensitive = true');
	t.is(fsm('abcdef', 'abc'), 0.5, 'Testing algorithm - 1');
});
