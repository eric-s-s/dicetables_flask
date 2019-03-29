import random
import unittest
from math import log10
from random import randrange


class RandomModifier(object):
    def __init__(self, modifier: int):
        self.modifier = modifier

    def randrange(self, stop_before):
        return self.modifier * randrange(stop_before)


def giant_range(large_number):
    max_rnd_power = 10
    max_power = int(log10(large_number))
    parts, remainder = divmod(max_power, 10)
    answer = 0
    for part in range(parts):
        modifier = 10 ** (max_rnd_power * part)
        ranges = get_digits_at(large_number, part * max_rnd_power, max_rnd_power * (1 + part))
        range_part = 0
        if ranges:
            range_part = RandomModifier(modifier).randrange(ranges)
        answer += range_part

    final_top = parts * max_rnd_power + remainder + 1
    final_bottom = parts * max_rnd_power
    final_ranges = get_digits_at(large_number, final_bottom, final_top)
    if final_ranges:
        answer += RandomModifier(10 ** final_bottom).randrange(final_ranges)

    return answer


def get_digits_at(large_number, start_power, end_power):
    top_digits = large_number // 10 ** end_power
    top_and_middle_digits = large_number // 10 ** start_power

    only_top_values = top_digits * 10 ** (end_power - start_power)
    top_and_middle_values = top_and_middle_digits

    return top_and_middle_values - only_top_values


def get_random_for_top_part(number):
    max_randrange_power = 10
    max_power = int(log10(number))
    maxes, top_bit = divmod(max_power, max_randrange_power)
    top_digits = get_digits_at(number, max_randrange_power * maxes, max_randrange_power * maxes + top_bit + 1)
    modifier = 10 ** (maxes * max_randrange_power)
    return RandomModifier(modifier).randrange(top_digits + 1)


class TestThing(unittest.TestCase):
    def test_RandomModifier_randrange_just_with_stop(self):
        to_test = RandomModifier(10)
        expected_range = (0, 10, 20)
        for _ in range(10):
            self.assertIn(to_test.randrange(3), expected_range)

    def test_get_number_section(self):
        number = 123
        result = get_digits_at(number, 1, 2)
        self.assertEqual(result, 2)

    def test_get_number_section_larger_case(self):
        number = 1234567890
        self.assertEqual(get_digits_at(number, 0, 5), 67890)
        self.assertEqual(get_digits_at(number, 5, 10), 12345)

    def test_get_random_for_top_part(self):
        number = 12345678901234567890000
        for _ in range(10):
            value = get_random_for_top_part(number)

    # def test_large_number_generator(self):
    #     large_number = 123 * 10 ** 18
    #
    #     # for _ in range(10):
    #     print(f"{giant_range(large_number):>21}")
    #     print(large_number)


class DigitClipper(object):
    def __init__(self, number) -> None:
        self.number = number
        self.max_power = int(log10(self.number))

    def get_top_digits(self, number_of_digits):
        divisor_power_of_ten = self.max_power + 1 - number_of_digits
        if divisor_power_of_ten < 0:
            raise ValueError('asked for too many digits')
        return self.number // 10 ** divisor_power_of_ten


class TestDigitClipper(unittest.TestCase):
    def test_clipper_init(self):
        number = 1234567890
        clipper = DigitClipper(number)
        self.assertEqual(clipper.number, number)
        self.assertEqual(clipper.max_power, 9)

    def test_clipper_get_top_digits_all_digits(self):
        number = 1234567890
        clipper = DigitClipper(number)
        number_of_digits = 10
        digits = clipper.get_top_digits(number_of_digits)
        self.assertEqual(digits, number)

    def test_clipper_get_top_digits_no_digits(self):
        number = 1234567890
        clipper = DigitClipper(number)
        no_digits = 0
        digits = clipper.get_top_digits(no_digits)
        self.assertEqual(digits, 0)

    def test_clipper_get_top_digits_too_many_digits_requested(self):
        number = 1234567890
        clipper = DigitClipper(number)
        too_many_digits = 11
        self.assertRaises(ValueError, clipper.get_top_digits, too_many_digits)

    def test_clipper_get_top_digits_some_digits(self):
        number = 1234567890
        clipper = DigitClipper(number)
        digits = clipper.get_top_digits(3)
        self.assertEqual(digits, 123)

    def test_clipper_get_middle_digits_all_digits(self):
        number = 1234567890
        clipper = DigitClipper(number)
        start_at_power = 0
        stop_before_power = clipper.max_power + 1


def slice_number(number, slice_size):
    total_power = int(log10(number))
    remaining_slices = total_power // slice_size
    while remaining_slices >= 0:
        top_slice, number = divmod(number, 10 ** (slice_size * remaining_slices))
        power_of_ten_for_top_slice = remaining_slices * slice_size
        yield top_slice, power_of_ten_for_top_slice
        remaining_slices -= 1


def randrange_slices(number, slice_size):
    slicer = slice_number(number, slice_size)
    use_slice_range = True
    for slice_range, power_of_ten_for_slice in slicer:
        if use_slice_range:
            if is_next_lower_digit_zero(number, power_of_ten_for_slice):
                random_slice = randrange(slice_range)
            else:
                random_slice = randrange(slice_range + 1)
        else:
            random_slice = randrange(10**slice_size)

        if use_slice_range and random_slice != slice_range:
            use_slice_range = False
        yield random_slice, power_of_ten_for_slice


def is_next_lower_digit_zero(number, current_power):
    return number % 10**current_power < 10**(current_power - 1)


class TestSliceNumberGenerators(unittest.TestCase):

    def test_slice_number_number_length_less_than_slice_size(self):
        number = 123
        slice_size = 4
        slicer = slice_number(number, slice_size)
        self.assertEqual(list(slicer), [(123, 0)])

    def test_slice_number_number_equal_to_slice_size(self):
        number = 123
        slice_size = 3
        slicer = slice_number(number, slice_size)
        self.assertEqual(list(slicer), [(123, 0)])

    def test_slice_number_number_gt_slice_size_lt_two_times_slice_size(self):
        number = 1234
        slice_size = 3
        slicer = slice_number(number, slice_size)
        self.assertEqual(list(slicer), [(1, 3), (234, 0)])

    def test_slice_number_larger_number(self):
        number = 1234567890
        slice_size = 3
        slicer = slice_number(number, slice_size)
        self.assertEqual(list(slicer), [(1, 9), (234, 6), (567, 3), (890, 0)])

    def test_slice_number_with_lots_of_zeros(self):
        number = 10000
        slice_size = 3
        slicer = slice_number(number, slice_size)
        self.assertEqual(list(slicer), [(10, 3), (0, 0)])

    def test_is_next_lower_digit_zero_false(self):
        current_power = 3
        number = 9134
        self.assertFalse(is_next_lower_digit_zero(number, current_power))

    def test_is_next_lower_digit_zero_true(self):
        current_power = 3
        number = 9034
        self.assertTrue(is_next_lower_digit_zero(number, current_power))

    def test_randrange_slices_number_smaller_than_slice_size(self):
        random.seed(1234)
        number = 3
        slice_size = 2
        expected = [1, 0, 0, 0, 2, 0, 2, 2, 0, 0, 1]
        for expected_random in expected:
            slicer = randrange_slices(number, slice_size)
            self.assertEqual(list(slicer), [(expected_random, 0)])

    def test_randrange_slices_number_equal_to_slice_size(self):
        random.seed(5436)
        number = 11
        slice_size = 2
        expected = [6, 10, 10, 7, 8, 0, 3, 10, 6, 2, 0, 6, 6, 1, 8, 8, 7, 6, 1, 6, 9, 2, 10, 2, 8, 1, 10, 1, 7, 5]
        for expected_random in expected:
            slicer = randrange_slices(number, slice_size)
            self.assertEqual(list(slicer), [(expected_random, 0)])

    def test_randrange_slices_number_greater_than_slice_size(self):
        random.seed(2938)
        number = 21
        slice_size = 1
        for _ in range(100):
            print(list(randrange_slices(number, slice_size)))

    # def test_randrange_slices_problem(self):
    #     random.seed(2378)
    #     number = 100
    #     slice_size = 1
    #     for _ in range(10):
    #         print(list(randrange_slices(number, slice_size)))