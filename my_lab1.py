# Лабораторная работа №1 
# Студента групи ИО-71 Долматова Ильи
# Вариант №4

input_data = [647, 1948, 1204, 1757, 16, 0, 2279, 353,
    450, 660, 950, 1210, 114, 1017, 1595, 370,
    32, 1725, 327, 209, 121, 1427, 1324, 293,
    602, 606, 1057, 1586, 393, 2835, 12, 866,
    353, 55, 47, 1586, 149, 604, 586, 671, 726,
    1024, 224, 998, 99, 300, 781, 232, 239, 312,
    47, 312, 1813, 257, 1602, 2422, 247, 240,
    2255, 28, 694, 1657, 102, 353, 3195, 141,
    1980, 143, 440, 1974, 472, 169, 358, 1207,
    824, 30, 39, 2167, 1761, 696, 1384, 1656,
    73, 184, 224, 873, 1117, 2667, 107, 2278,
    246, 484, 1408, 1873, 1864, 1399, 331,
    1764, 326, 12]

gamma = 0.84
workWithoutFailsTimeParam = 2748
intensivityTimeParam = 2308


sorted_table = sorted(input_data)

print("Средняя наработка до отказа Tср:", sum(sorted_table) / len(sorted_table))

k = 10
intervals_length = (sorted_table[-1] - sorted_table[0]) / k

intervals = []
for i in range(k):
    intervals.append([a for a in sorted_table if (a >= i * intervals_length and a < (i + 1) * intervals_length)])

f = [len(interval) / (len(sorted_table) * intervals_length) for interval in intervals]

p_list = []
area = 1
for i in range(k):
    p_list.append(area)
    area -= f[i] * intervals_length

p_min = max([p for p in p_list if p < gamma])
p_max = min([p for p in p_list if p > gamma])

print("γ-процентная наработка на отках Tγ при γ = 0.84:", intervals_length - intervals_length * (p_min - gamma) / (p_min - p_max))

probability_of_unfail = 1
whole = int(workWithoutFailsTimeParam // intervals_length)
for i in range(whole):
    probability_of_unfail -= f[i] * intervals_length
probability_of_unfail -= f[whole] * (workWithoutFailsTimeParam % intervals_length)

print("Вероятность безотказной работи на время 2748 часов:", probability_of_unfail)

probability_of_unfail = 1
whole = int(workWithoutFailsTimeParam // intervals_length)
for i in range(whole):
    probability_of_unfail -= f[i] * intervals_length
probability_of_unfail -= f[whole] * (workWithoutFailsTimeParam % intervals_length)

print("Интенсивность отказoв на время 2308 часов:", f[int(intensivityTimeParam // intervals_length)] / probability_of_unfail)
