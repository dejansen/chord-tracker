<script setup>

defineProps({
  title: {
    type: String,
    default: "An empty panel"
  }
})

</script>

<template>
    <div class="columns mt-6">
        <div class="column  is-half  is-offset-one-quarter">
            <div class="panel mt-6">
                <div class="has-background-info-dark">
                    <p class="card-header-title has-text-info-light is-size-4">{{title}}</p>
                </div>
                <div class="panel-block">
                    <div class="container">
                        <slot>
                            No slot content Defined
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>